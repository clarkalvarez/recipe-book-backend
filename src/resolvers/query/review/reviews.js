import { pool } from "../../../db.js";

export const reviews = async () => {
  const { rows } = await pool.query("SELECT * FROM reviews");
  return rows;
};
