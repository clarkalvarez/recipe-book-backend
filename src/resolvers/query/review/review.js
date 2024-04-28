import { pool } from "../../../db.js";

export const review = async (_, { id }) => {
  const { rows } = await pool.query("SELECT * FROM reviews WHERE id = $1", [
    id,
  ]);
  return rows[0];
};
