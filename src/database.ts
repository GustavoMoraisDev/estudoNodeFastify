// src/database.ts

import knex from "knex";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Corrija o caminho para navegar apenas um nível acima (de `src` para `02-API-REST`)
const dbPath = path.resolve(__dirname, '..', 'tmp', 'app.db');

const setupKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
});

export { setupKnex as knex };