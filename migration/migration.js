// migration.js
import knex from "knex";
import { knexfile } from "./knexfile.js";

const db = knex(knexfile);

db.schema
  .createTable("recipes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.specificType("ingredients", "TEXT[]").notNullable();
  })
  .createTable("reviews", (table) => {
    table.increments("id").primary();
    table.string("dish").notNullable();
    table.string("review").notNullable();
    table.integer("rate").notNullable();
    table.string("author").notNullable();
  })
  .createTable("authors", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("biography").notNullable();
    table.integer("followers").notNullable();
  })
  .then(() => console.log("Tables created successfully"))
  .catch((err) => console.error("Error creating tables:", err))
  .finally(() => db.destroy());
