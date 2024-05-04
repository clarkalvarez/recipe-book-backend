import { addRecipe } from "./mutation/addRecipe.js";
import { updateRecipe } from "./mutation/updateRecipe.js";
import { deleteRecipe } from "./mutation/deleteRecipe.js";
import { recipe } from "./query/recipe.js";
import { recipes } from "./query/recipes.js";
import { resolverReviews } from "./query/resolverReviews.js";
export const resolvers = {
  Query: {
    recipe,
    recipes,
  },
  Mutation: {
    addRecipe,
    updateRecipe,
    deleteRecipe,
  },
  Recipe: {
    reviews: resolverReviews,
  },
};
