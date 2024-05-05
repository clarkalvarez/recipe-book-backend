import { pool } from "../../db.js";

export const author = async (_, { id }) => {
  const { rows } = await pool.query("SELECT * FROM authors WHERE id = $1", [
    id,
  ]);
  return rows[0];
};
