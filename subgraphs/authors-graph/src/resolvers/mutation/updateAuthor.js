import { pool } from "../../db.js";

export const updateAuthor = async (_, { id, name, biography, followers }) => {
  const updates = [];
  const values = [id];

  if (name !== undefined) {
    updates.push(`name = $${values.push(name)}`);
  }
  if (biography !== undefined) {
    updates.push(`biography = $${values.push(description)}`);
  }
  if (followers !== undefined) {
    updates.push(`followers = $${values.push(image)}`);
  }
  const updateQuery = `
    UPDATE authors 
    SET ${updates.join(", ")}
    WHERE id = $1
    RETURNING *`;

  const { rows } = await pool.query(updateQuery, values);
  return rows[0];
};
