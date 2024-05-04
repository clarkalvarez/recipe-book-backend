import { pool } from "../../db.js";

export const reviewsResolver = async ({ dish }) => {
  console.log("dish");
  console.log(dish);

  const { rows } = await pool.query("SELECT * FROM reviews WHERE dish = $1", [
    dish,
  ]);

  return rows;
};
