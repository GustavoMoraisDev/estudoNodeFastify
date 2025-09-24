import { knex } from "./database.js";

async function checkTables() {
  const result = await knex.raw(
    "SELECT name FROM sqlite_master WHERE type='table';"
  );
  console.log(result);
}

checkTables();
