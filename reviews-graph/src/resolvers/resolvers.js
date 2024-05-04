import { addReview } from "./mutation/addReview.js";
import { review } from "./query/review.js";
import { reviews } from "./query/reviews.js";
import { reviewsForRecipe } from "./query/reviewsForRecipe.js";
import { reviewsResolver } from "./query/reviewsResolver.js";

export const resolvers = {
  Query: {
    review,
    reviews,
  },
  Mutation: {
    addReview,
  },
  Review: {
    __resolveReference: reviewsResolver,
  },
};
