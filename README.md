| Característica      | CommonJS (CJS)               | ESM (module)                         |
| ------------------- | ---------------------------- | ------------------------------------ |
| Sintaxe             | `require` / `module.exports` | `import` / `export`                  |
| Padrão oficial JS   | ❌ Não                        | ✅ Sim                                |
| Suporte no Node     | ✅ Total                      | ✅ Desde Node 12+                     |
| Carregamento        | Síncrono                     | Assíncrono                           |
| Compatibilidade NPM | Melhor com pacotes antigos   | Melhor com pacotes novos             |
| Configuração extra  | Nenhuma                      | Precisa `"type": "module"` ou `.mjs` |















package.json
{
  "name": "02-api-rest",
  "version": "1.0.0",

  // CommonJS (CJS) -
  // Importação
  const fastify = require('fastify');

  // Exportação
  module.exports = fastify;

  // ECMAScript Module (ESM)
  // Importação
     import fastify from 'fastify';

  // Exportação
     export default fastify;


   "type": "module",
  "main": "server.js",

  
  "scripts": {
    
    // esse watch le meu código e faz a atualização do que eu mudei

    "dev": "tsx watch src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^24.5.2",
    "tsx": "^4.20.5",
    "typescript": "^5.9.2"
  },
  "dependencies": {
    "fastify": "^5.6.0"
  }
}