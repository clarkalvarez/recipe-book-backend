import { pool } from "../../db.js";

export const addAuthor = async (_, { name, biography, followers }) => {
  const { rows } = await pool.query(
    "INSERT INTO authors(name, biography, followers) VALUES ($1, $2, $3) RETURNING *",
    [name, biography, followers]
  );
  return rows[0];
};
