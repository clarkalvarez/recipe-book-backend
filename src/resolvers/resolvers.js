import { addRecipe } from "./mutation/recipe/addRecipe.js";
import { updateRecipe } from "./mutation/recipe/updateRecipe.js";
import { deleteRecipe } from "./mutation/recipe/deleteRecipe.js";
import { addReview } from "./mutation/review/addReview.js";
import { recipe } from "./query/recipe/recipe.js";
import { recipes } from "./query/recipe/recipes.js";
import { review } from "./query/review/review.js";
import { reviews } from "./query/review/reviews.js";
import { reviewsForRecipe } from "./query/review/reviewsForRecipe.js";

export const resolvers = {
  Query: {
    recipe,
    recipes,
    review,
    reviews,
  },
  Mutation: {
    addRecipe,
    updateRecipe,
    deleteRecipe,
    addReview,
  },
  Recipe: {
    reviewsForRecipe,
  },
};
