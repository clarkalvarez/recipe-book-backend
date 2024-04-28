import { addRecipe } from "./mutation/recipe/addRecipe.js";
import { updateRecipe } from "./mutation/recipe/updateRecipe.js";
import { deleteRecipe } from "./mutation/recipe/deleteRecipe.js";
import { recipe } from "./query/recipe/recipe.js";
import { recipes } from "./query/recipe/recipes.js";
import { addReview } from "./mutation/review/addReview.js";

export const resolvers = {
  Query: {
    recipe,
    recipes,
  },
  Mutation: {
    addRecipe,
    updateRecipe,
    deleteRecipe,
    addReview,
  },
};
