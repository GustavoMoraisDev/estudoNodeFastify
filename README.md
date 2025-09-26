 Estudando Node com Fastify

 - Criando API REST
 - Criando db sqlite e utilizando knex
 - Criando migration para criação de Tabelas




 
 
 // RF - Requisitos Funcionais
 // O Usuário deve conseguir criar
 - [x] O usuário deve poder criar uma nova transação
 - [] O usuário deve poder obter um resumo da sua conta
 - [x] O usuário deve poder listar todas as transações que ocorreram
 - [x] O usuário deve poder visualizar uma transação unica




 // RN - Regras de Negócios
 // Coisas que pode acontecer e nossa aplicação pode validar
 - [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
 - [] Deve ser possivél identificarmos o usuário entre as requisições
 - [] O usuário só pode visualizar as transações o qual ele criou





 // RNF - Requisitos Não Funcionais
 // Como vamos atingir isso, quais tecnologias vamos usar e as estratégias




| Característica      | CommonJS (CJS)               | ESM (module)                         |
| ------------------- | ---------------------------- | ------------------------------------ |
| Sintaxe             | `require` / `module.exports` | `import` / `export`                  |
| Padrão oficial JS   | ❌ Não                        | ✅ Sim                                |
| Suporte no Node     | ✅ Total                      | ✅ Desde Node 12+                     |
| Carregamento        | Síncrono                     | Assíncrono                           |
| Compatibilidade NPM | Melhor com pacotes antigos   | Melhor com pacotes novos             |
| Configuração extra  | Nenhuma                      | Precisa `"type": "module"` ou `.mjs` |


    
    // esse watch le meu código e faz a atualização do que eu mudei

    "dev": "tsx watch src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
    
