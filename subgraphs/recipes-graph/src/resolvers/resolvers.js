import { addRecipe } from "./mutation/addRecipe.js";
import { updateRecipe } from "./mutation/updateRecipe.js";
import { deleteRecipe } from "./mutation/deleteRecipe.js";
import { addReview } from "./mutation/addReview.js";
import { updateReview } from "./mutation/updateReview.js";
import { deleteReview } from "./mutation/deleteReview.js";
import { recipe } from "./query/recipe.js";
import { recipes } from "./query/recipes.js";
import { review } from "./query/review.js";
import { reviews } from "./query/reviews.js";

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
    updateReview,
    deleteReview,
  },
};
