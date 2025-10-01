import type { FastifyInstance } from "fastify"
import { uuid, z } from "zod"
import {knex} from "../database.js"
import { id } from "zod/locales"
import { randomUUID } from "crypto"
import { request } from "http"
import { Session } from "inspector"
import { checkSessionId } from "../middleware/checkSessionId.js"



export async function transactionsRoutes(app: FastifyInstance) {
// Com o app que está recebendo fastify podemos criar rotas da seguinte forma:
// com app. já temos os tipos de métodos que podemos selecionar
// O Primeiro parametro que incluimos é a rota final
// Recebemos também a req ou res como parametro
// E logo em seguida a função e o return da rota

// request ou reply é a Requisição da rota e podemos acessar mutiso parametros dela
// Exemple: request.body = Pego o body completo que veio daquela requisição

// rota get para retornar todas as transactions
//preHandler: Parametro que é feito antes do Handler ou seja anrtes da ação
app.get('/', {preHandler: [checkSessionId] } , async(request, reply) => {
  const { sessionId } = request.cookies
  const transactions = await knex('transactions')
  .where('session_id', sessionId)
  .select()
  return {transactions}
})

// rota get para retornar transaction seleciodas pelo id do params
app.get('/:id', {preHandler: [checkSessionId] } , async (request, reply) => {
  const getTransactionParamsSchema = z.object({
    id: z.string().uuid(),
  })

  // validadando os parametros
  const { id } = getTransactionParamsSchema.parse(request.params)

  const { sessionId } = request.cookies

  // buscando a transação no banco
  const transaction = await knex('transactions')
  .where({
    session_id: sessionId,
    id, 
  })
  .first()


 if (!transaction) {
      return reply.status(404).send({ error: "Transaction não encontrada" });
    }

  
  return {transaction}
})

app.get('/sumary', {preHandler: [checkSessionId] } , async(request) => {

  const { sessionId } = request.cookies

  const summary = await knex('transactions')
  .where('session_id', sessionId)
  .sum('amount', {as: 'Valor total transacionado'})
  .first()
  return { summary}
})



// rota post para criar novas transações
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

  let sessionId = request.cookies.sessionId

  if(!sessionId) {
    sessionId = randomUUID()

    reply.cookie('sessionId', sessionId, {
      path: '/',
      // estou passando o tempo de expiração em segundos
      //  segundos * minuto * hora * dia * semana
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  }

  // Salvando no DB 
  await knex('transactions').insert({
    id: randomUUID(),
    title,
    amount: type === 'credit' ? amount : amount * -1,
    session_id: sessionId
  })


  return reply.status(201).send('New Registrer add Sucess')

})

}
