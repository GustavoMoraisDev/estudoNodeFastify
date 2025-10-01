// TypeScript é um super set - Um plus do JavaScript
// Conseguimos trabalhar com Tipagem estática

// Runtime Type Checking
// Static Type Checking


import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { knex } from './database.js'
import { env } from './env/index.js'
import { transactionsRoutes } from './routes/transactions.js'


const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
} )


// App.listen para nosso servidor ouvir uma rota
app
  .listen({
    port: env.PORT,
    // listen retorna uma promise do JS e para sabermos quando finalizou essa promise usamos then
  })
  .then(() => console.log('HTTP Server Running!'))
