import 'dotenv/config'
//o dot/config le os e jogou todas as variaveis ambientes aqui

import { z } from 'zod'
// serve para criar um schema: validador de dados

// validação de dados e formato dos campos

// Oque está acontecendo por de baixo dos panos 
// Estamos recebendo dados de todas as variáveis ambientes
// Estamos usando o zod para fazer a validação
// Estamos colocando como obrigação que tenha uma DATABASE_URL
// E que dentro dela tenha uma String

const envShema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production') ,
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333)
})

//SafeParse verifica o processo
const _env = envShema.safeParse(process.env)

// Se o Sucess for igual a false gera o erro
if (_env.success === false) {
    console.error('Invalid environment variable!', _env.error.format())

    throw new Error('Invalid environment variable!')
}


export const env =_env.data