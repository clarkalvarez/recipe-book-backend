import { pool } from "../../../db.js";

export const recipe = async (_, { name }) => {
  const { rows } = await pool.query("SELECT * FROM recipes WHERE name = $1", [
    name,
  ]);
  return rows[0];
};
