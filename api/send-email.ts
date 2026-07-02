import type { IncomingMessage, ServerResponse } from 'node:http'
import { handleSendEmail } from '../server/api-route'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  await handleSendEmail(req, res, process.env)
}
