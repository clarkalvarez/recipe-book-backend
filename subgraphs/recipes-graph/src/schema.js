import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    recipes: [Recipe]
    recipe(name: String): Recipe
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addRecipe(
      name: String!
      description: String!
      image: String!
      ingredients: [String]!
    ): Recipe

    updateRecipe(
      id: ID!
      name: String
      image: String
      description: String
      ingredients: [String]
    ): Recipe

    deleteRecipe(id: ID!): String

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

    deleteReview(id: ID!): String
  }

  extend type Author @key(fields: "name") {
    name: String @external
  }

  type Review {
    id: ID
    dish: String
    review: String
    rate: Int
    author: String
    authorDetails: Author
  }

  type Recipe {
    id: ID
    name: String
    description: String
    image: String
    ingredients: [String]
    reviewsForRecipe(author: String): [Review]
  }
`;
