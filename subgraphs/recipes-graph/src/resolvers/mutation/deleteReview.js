import { pool } from "../../db.js";

export const deleteReview = async (_, { id }) => {
  const result = await pool.query(
    "DELETE FROM reviews WHERE id = $1 RETURNING *",
    [id]
  );

  if (result.rowCount === 0) {
    return "Not found";
  } else {
    const { dish, author } = result.rows[0];
    return `Deleted review of ${author} to ${dish} successfully`;
  }
};
