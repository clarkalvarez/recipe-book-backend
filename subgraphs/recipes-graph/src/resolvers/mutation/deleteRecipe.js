import { pool } from "../../db.js";

export const deleteRecipe = async (_, { id }) => {
  console.log(id);
  const result = await pool.query(
    "DELETE FROM recipes WHERE id = $1 RETURNING name",
    [id]
  );

  if (result.rowCount === 0) {
    return "Not found";
  } else {
    const { name } = result.rows[0];
    return `Deleted ${name} successfully`;
  }
};
