import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addReview(
      dish: String!
      review: String!
      rate: Int!
      author: String!
    ): Review

    updateReview(
      id: ID!
      dish: String
      review: String
      rate: Int
      author: String
    ): Review

    deleteReview(id: ID!): ID
  }

  type Review @key(fields: "dish") {
    id: ID
    dish: String
    review: String
    rate: Int
    author: String
  }
`;
