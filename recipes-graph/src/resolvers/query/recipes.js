import { pool } from "../../db.js";

export const recipes = async () => {
  const { rows } = await pool.query(`SELECT * FROM recipes`);

  return rows;
};
