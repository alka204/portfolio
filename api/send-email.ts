import type { IncomingMessage, ServerResponse } from "node:http";
import { handleSendEmail } from "../server/api-route.js";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  await handleSendEmail(req, res, process.env);
}
