import { ApolloServer } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/federation";
import { resolvers } from "./resolvers/resolvers.js";
import { typeDefs } from "./schema.js";

const startServer = async () => {
  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  server
    .listen({ port: 4002 })
    .then(({ url }) => {
      console.log(`Authors Graph started at ${url} `);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

startServer()
  .then(() => console.log("Authors Graph is running"))
  .catch((err) => console.log("Error starting Authors Graph", err));
