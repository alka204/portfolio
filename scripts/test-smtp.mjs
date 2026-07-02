import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const smtpEmail = (process.env.SMTP_EMAIL || '').trim()
const smtpPassword = (process.env.SMTP_PASSWORD || '')
  .trim()
  .replace(/^["']|["']$/g, '')
  .replace(/\s/g, '')

if (!smtpEmail || !smtpPassword) {
  console.error('Missing SMTP_EMAIL or SMTP_PASSWORD in .env')
  process.exit(1)
}

console.log('Testing SMTP for:', smtpEmail)
console.log('Password length:', smtpPassword.length)

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: smtpEmail, pass: smtpPassword },
})

transporter
  .verify()
  .then(() => {
    console.log('SMTP connection successful — contact form should work.')
  })
  .catch((error) => {
    console.error('SMTP failed:', error.message)
    console.error('\nFix steps:')
    console.error('1. Enable 2-Step Verification: https://myaccount.google.com/security')
    console.error('2. Create a new App Password: https://myaccount.google.com/apppasswords')
    console.error('3. Update SMTP_PASSWORD in .env')
    console.error('4. Restart the dev server: npm run dev')
    process.exit(1)
  })
