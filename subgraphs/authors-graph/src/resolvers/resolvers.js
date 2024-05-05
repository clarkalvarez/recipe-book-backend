import { addAuthor } from "./mutation/addAuthor.js";
import { author } from "./query/author.js";
import { authors } from "./query/authors.js";
import { authorResolver } from "./query/authorResolver.js";
import { deleteAuthor } from "./mutation/deleteAuthor.js";
import { updateAuthor } from "./mutation/updateAuthor.js";

export const resolvers = {
  Query: {
    author,
    authors,
  },
  Mutation: {
    addAuthor,
    deleteAuthor,
    updateAuthor,
  },
  Author: {
    __resolveReference: authorResolver,
  },
};
