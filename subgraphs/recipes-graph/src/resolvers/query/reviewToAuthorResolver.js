export const reviewToAuthorResolver = ({ author }) => {
  if (!author) {
    return null;
  }
  return { name: author };
};
