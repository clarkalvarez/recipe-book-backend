import { gql } from "apollo-server";

export const typeDefs = gql`
  type Recipe {
    id: ID
    name: String
    description: String
    image: String
    ingredients: [String]
    reviewsForRecipe(author: String): [Review]
  }

  type Review {
    id: ID
    dish: String
    review: String
    rate: String
    author: String
  }

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

    deleteRecipe(id: ID!): ID

    addReview(
      dish: String!
      review: String!
      rate: String!
      author: String!
    ): Review

    updateReview(
      id: ID!
      dish: String
      review: String
      rate: String
      author: String
    ): Review

    deleteReview(id: ID!): ID
  }
`;
