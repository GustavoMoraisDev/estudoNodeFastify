import type { FastifyInstance } from "fastify"
import { z } from "zod"
import {knex} from "../database.js"
import { id } from "zod/locales"
import { randomUUID } from "crypto"
import { table } from "console"



export async function transactionsGet(app: FastifyInstance) {

app.get('/', async(request, reply) => {
    const transactions = await knex('transactions').select('*')
  
   return reply.status(200).send(transactions)

})
}


