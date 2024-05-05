export const reviewToAuthorResolver = ({ author }) => {
  console.log(author);
  if (!author) {
    return null;
  }
  return { name: author };
};
