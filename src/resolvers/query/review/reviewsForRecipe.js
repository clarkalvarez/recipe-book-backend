import { pool } from "../../../db.js";

export const reviewsForRecipe = async (parent, { author }) => {
  const name = parent.name;
  let query = "SELECT * FROM reviews WHERE dish = $1";
  const queryParams = [name];

  if (author) {
    query += " AND author = $2";
    queryParams.push(author);
  }

  const { rows } = await pool.query(query, queryParams);
  return rows;
};
