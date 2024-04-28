import { pool } from "../../../db.js";

export const recipe = async (_, { id }) => {
  const { rows } = await pool.query("SELECT * FROM recipes WHERE id = $1", [
    id,
  ]);
  return rows[0];
};
