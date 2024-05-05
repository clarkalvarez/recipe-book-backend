import { pool } from "../../db.js";

export const authorResolver = async ({ name }) => {
  console.log(name);
  const { rows } = await pool.query("SELECT * FROM authors WHERE name = $1", [
    name,
  ]);

  return rows[0];
};