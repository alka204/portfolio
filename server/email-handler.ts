import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export interface EmailPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailConfig {
  smtpEmail: string
  smtpPassword: string
  ownerEmail: string
}

function createTransporter(config: EmailConfig): Transporter {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.smtpEmail,
      pass: config.smtpPassword,
    },
    tls: {
      rejectUnauthorized: true,
    },
  })
}

export async function sendContactEmails(
  payload: EmailPayload,
  config: EmailConfig,
): Promise<{ success: true; message: string }> {
  const { name, email, subject, message } = payload
  const transporter = createTransporter(config)

  const ownerHtml = `
    <h2>New Portfolio Contact</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `

  const confirmationHtml = `
    <h2>Thank you for reaching out, ${escapeHtml(name)}!</h2>
    <p>I've received your message and will get back to you soon.</p>
    <hr />
    <p><strong>Your subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Your message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    <br />
    <p>Best regards,<br />Alka Kumari</p>
  `

  await transporter.sendMail({
    from: `"Alka Kumari" <${config.smtpEmail}>`,
    to: config.ownerEmail,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: ownerHtml,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  })

  await transporter.sendMail({
    from: `"Alka Kumari" <${config.smtpEmail}>`,
    to: email,
    subject: `We received your message — ${subject}`,
    html: confirmationHtml,
    text: `Hi ${name},\n\nThank you for contacting me. I've received your message and will respond soon.\n\nYour message:\n${message}\n\nBest regards,\nAlka Kumari`,
  })

  return {
    success: true,
    message:
      'Message sent successfully! A confirmation email has been sent to your inbox.',
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function validateEmailPayload(body: unknown): {
  valid: boolean
  errors: string[]
  data?: EmailPayload
} {
  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Invalid request body.'] }
  }

  const record = body as Record<string, unknown>
  const name = typeof record.name === 'string' ? record.name.trim() : ''
  const email = typeof record.email === 'string' ? record.email.trim() : ''
  const subject = typeof record.subject === 'string' ? record.subject.trim() : ''
  const message = typeof record.message === 'string' ? record.message.trim() : ''
  const errors: string[] = []

  if (!name || name.length < 2) errors.push('Name is required.')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required.')
  }
  if (!subject || subject.length < 3) errors.push('Subject is required.')
  if (!message || message.length < 10) errors.push('Message is required.')

  if (errors.length > 0) return { valid: false, errors }

  return {
    valid: true,
    errors: [],
    data: { name, email, subject, message },
  }
}

export function getEmailConfigFromEnv(env: NodeJS.ProcessEnv): EmailConfig | null {
  const smtpEmail = (env.SMTP_EMAIL || env.VITE_SMTP_EMAIL || '').trim()
  const rawPassword = env.SMTP_PASSWORD || env.VITE_SMTP_PASSWORD || ''
  const smtpPassword = rawPassword.trim().replace(/^["']|["']$/g, '').replace(/\s/g, '')
  const ownerEmail = (env.OWNER_EMAIL || env.VITE_OWNER_EMAIL || smtpEmail).trim()

  if (!smtpEmail || !smtpPassword) return null

  return { smtpEmail, smtpPassword, ownerEmail: ownerEmail || smtpEmail }
}
