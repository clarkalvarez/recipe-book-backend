import { pool } from "../../db.js";

export const updateRecipe = async (
  _,
  { id, name, description, image, ingredients }
) => {
  const updates = [];
  const values = [id];

  if (name !== undefined) {
    updates.push(`name = $${values.push(name)}`);
  }
  if (description !== undefined) {
    updates.push(`description = $${values.push(description)}`);
  }
  if (image !== undefined) {
    updates.push(`image = $${values.push(image)}`);
  }
  if (ingredients !== undefined) {
    updates.push(`ingredients = $${values.push(ingredients)}`);
  }

  const updateQuery = `
    UPDATE recipes 
    SET ${updates.join(", ")}
    WHERE id = $1
    RETURNING *`;

  const { rows } = await pool.query(updateQuery, values);
  return rows[0];
};
