import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor(name: String!, biography: String!, followers: Int!): Author

    updateAuthor(
      id: ID!
      name: String
      biography: String
      followers: Int
    ): Author

    deleteAuthor(id: ID!): String
  }

  type Author @key(fields: "name") {
    id: ID
    name: String
    biography: String
    followers: Int
  }
`;
