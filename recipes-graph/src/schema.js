import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    recipes: [Recipe]
    recipe(name: String): Recipe
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
  }

  type Recipe {
    id: ID
    name: String
    description: String
    image: String
    ingredients: [String]
    reviews: [Review]
  }

  extend type Review @key(fields: "dish") {
    dish: String @external
  }
`;
