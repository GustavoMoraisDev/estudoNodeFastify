Estudando Node com Fastify

- Criando API REST
- Criando db sqlite e utilizando knex
- Criando migration para criação de Tabelas



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
    
