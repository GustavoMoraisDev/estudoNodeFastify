// TypeScript é um super set - Um plus do JavaScript
// Conseguimos trabalhar com Tipagem estática

// Runtime Type Checking
// Static Type Checking

// Tipagem para remoção de "Erros"
// interface User {
//     birthYear: number
// }

// function calcularAIdadeDoUsuario(user: User) {
//     return new Date().getFullYear() - user.birthYear
// }

// calcularAIdadeDoUsuario({
//     birthYear: 1994
// })

// console.log(calcularAIdadeDoUsuario)

// npx tsx src/server.ts

import fastify from 'fastify'
import { knex } from './database.js'
import { env } from './env/index.js'

const app = fastify()

// Com o app que está recebendo fastify podemos criar rotas da seguinte forma:
// com app. já temos os tipos de métodos que podemos selecionar
// O Primeiro parametro que incluimos é a rota final
// O Segundo é a função e o return da rota
app.get('/hello', async() => {
  const transactions = await knex('transactions')
  .where('amount', 1000)
  .select('*')

  return transactions

})

// App.listen para nosso servidor ouvir uma rota
app
  .listen({
    port: env.PORT,
    // listen retorna uma promise do JS e para sabermos quando finalizou essa promise usamos then
  })
  .then(() => console.log('HTTP Server Running!'))
