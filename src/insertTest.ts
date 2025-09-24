import { knex } from "./database.js";
import { randomUUID } from "crypto";

async function insertTest() {
  await knex("transactions").insert({
    id: randomUUID(),
    title: "Teste de transação",
    amount: 1000,
    created_at: new Date(),
  });

  console.log("Registro inserido com sucesso!");
  process.exit(0);
}

insertTest();
