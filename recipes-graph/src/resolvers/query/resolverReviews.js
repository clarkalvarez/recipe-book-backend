export const resolverReviews = ({ name }) => {
  if (!name) {
    return null;
  }
  return [{ dish: name }];
};
