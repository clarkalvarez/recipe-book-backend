import { pool } from "../../db.js";

export const updateReview = async (_, { id, dish, review, rate, author }) => {
  const updates = [];
  const values = [id];

  if (dish !== undefined) {
    updates.push(`dish = $${values.push(dish)}`);
  }
  if (review !== undefined) {
    updates.push(`review = $${values.push(review)}`);
  }
  if (rate !== undefined) {
    updates.push(`rate = $${values.push(rate)}`);
  }
  if (author !== undefined) {
    updates.push(`author = $${values.push(author)}`);
  }

  const updateQuery = `
    UPDATE reviews 
    SET ${updates.join(", ")}
    WHERE id = $1
    RETURNING *`;

  const { rows } = await pool.query(updateQuery, values);
  return rows[0];
};
