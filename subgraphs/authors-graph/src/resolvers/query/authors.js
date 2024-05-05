import { pool } from "../../db.js";

export const authors = async () => {
  const { rows } = await pool.query("SELECT * FROM authors");

  return rows;
};
