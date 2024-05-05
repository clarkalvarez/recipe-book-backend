import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import waitPort from "wait-port";

const services = [
  { name: "Recipes Graph", url: "http://localhost:4001" },
  { name: "Authors Graph", url: "http://localhost:4002" },
];

const supergraphSdl = new IntrospectAndCompose({
  subgraphs: services,
  pollIntervalInMs: 10000,
  subgraphHealthCheck: true,
});

const gateway = new ApolloGateway({
  supergraphSdl,
});

const startUp = async () => {
  try {
    await waitPort({ host: "localhost", port: 4001 });
    await waitPort({ host: "localhost", port: 4002 });

    // Load the supergraph schema
    const { schema, executor } = await gateway.load();
    const server = new ApolloServer({
      schema, // The supergraph schema obtained from the gateway
      executor, // The executor obtained from the gateway
      debug: true,
    });

    server
      .listen()
      .then(({ url }) => {
        console.log(`gateway started at ${url} `);
      })
      .catch((e) => {
        console.log(e.message);
      });
  } catch (error) {
    console.log(error);
  }
};

startUp()
  .then(() => console.log("Gateway is running"))
  .catch((e) => console.log(`Error ${String(e)} starting gateway`));
