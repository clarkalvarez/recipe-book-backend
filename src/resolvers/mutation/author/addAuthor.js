import { pool } from "../../../db.js";

export const addRecipe = async (
  test,
  { name, description, image, ingredients }
) => {
  console.log(test);
  const { rows } = await pool.query(
    "INSERT INTO recipes(name, description, image, ingredients) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, description, image, ingredients]
  );
  return rows[0];
};
