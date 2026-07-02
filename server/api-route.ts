import type { IncomingMessage, ServerResponse } from 'node:http'
import {
  getEmailConfigFromEnv,
  sendContactEmails,
  validateEmailPayload,
} from '../server/email-handler'

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

export async function handleSendEmail(
  req: IncomingMessage,
  res: ServerResponse,
  env: NodeJS.ProcessEnv,
) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.end()
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { success: false, message: 'Method not allowed.' })
    return
  }

  try {
    const raw = await readBody(req)
    const body = raw ? JSON.parse(raw) : {}
    const validation = validateEmailPayload(body)

    if (!validation.valid || !validation.data) {
      sendJson(res, 400, {
        success: false,
        message: validation.errors.join(' '),
      })
      return
    }

    const config = getEmailConfigFromEnv(env)
    if (!config) {
      sendJson(res, 500, {
        success: false,
        message: 'Email service is not configured on the server.',
      })
      return
    }

    const result = await sendContactEmails(validation.data, config)
    sendJson(res, 200, result)
  } catch (error) {
    console.error('Email send error:', error)

    const err = error as { code?: string; message?: string }
    const isAuthError =
      err.code === 'EAUTH' ||
      err.message?.includes('Invalid login') ||
      err.message?.includes('BadCredentials')

    sendJson(res, 500, {
      success: false,
      message: isAuthError
        ? 'Gmail rejected the app password. Create a new App Password at myaccount.google.com/apppasswords, update SMTP_PASSWORD in .env, then restart the server. Run npm run test:smtp to verify.'
        : 'Failed to send email. Please try again later.',
    })
  }
}
