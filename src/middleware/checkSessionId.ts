import type { FastifyReply, FastifyRequest } from "fastify"

// função para verificar o cookies da requisição
export async function checkSessionId(request: FastifyRequest, reply: FastifyReply) {
    const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Access Denied'
    })
  }
}