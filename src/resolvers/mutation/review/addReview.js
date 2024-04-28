import { pool } from "../../../db.js";

export const addReview = async (_, { dish, review, rate, author }) => {
  const { rows } = await pool.query(
    "INSERT INTO reviews(dish, review, rate, author) VALUES ($1, $2, $3, $4) RETURNING *",
    [dish, review, rate, author]
  );
  return rows[0];
};
