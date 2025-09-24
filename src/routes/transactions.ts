import type { FastifyInstance } from "fastify"
import { z } from "zod"
import {knex} from "../database.js"
import { id } from "zod/locales"
import { randomUUID } from "crypto"



export async function transactionsRoutes(app: FastifyInstance) {
// Com o app que está recebendo fastify podemos criar rotas da seguinte forma:
// com app. já temos os tipos de métodos que podemos selecionar
// O Primeiro parametro que incluimos é a rota final
// Recebemos também a req ou res como parametro
// E logo em seguida a função e o return da rota

// request ou reply é a Requisição da rota e podemos acessar mutiso parametros dela
// Exemple: request.body = Pego o body completo que veio daquela requisição

app.post('/', async(request, reply) => {
 
  // definindo o modelo de request.body com zod
  const createTransactionBody = z.object({
    title: z.string(),
    amount: z.number(),
    type: z.enum(['credit', 'debit']),
  })

  // Validando se meu Request.body está correto com o que eu espero
  const { title, amount, type }  = createTransactionBody.parse(
    request.body,
  )

  // Salvando no DB 
  await knex('transactions').insert({
    id: randomUUID(),
    title,
    amount: type === 'credit' ? amount : amount * -1,
  })


  return reply.status(201).send('New Registrer add Sucess')

})

}
