import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react'
import { sendContactEmail } from '../services/email'
import {
  hasValidationErrors,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '../utils/validation'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const nextErrors = validateContactForm({ ...form, [field]: value })
      setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }))
    }
  }

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const nextErrors = validateContactForm(form)
    setErrors((prev) => ({ ...prev, [field]: nextErrors[field] }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })

    const validationErrors = validateContactForm(form)
    setErrors(validationErrors)

    if (hasValidationErrors(validationErrors)) return

    setStatus('loading')
    setStatusMessage('')

    const result = await sendContactEmail(form)

    if (result.success) {
      setStatus('success')
      setStatusMessage(result.message)
      setForm(initialForm)
      setTouched({})
      setErrors({})
    } else {
      setStatus('error')
      setStatusMessage(result.message)
    }
  }

  const inputClass = (field: keyof ContactFormData) =>
    `w-full rounded-xl border bg-surface-raised/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-subtle focus:ring-2 focus:ring-accent/30 ${
      errors[field] && touched[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-border focus:border-accent'
    }`

  return (
    <section id="contact" className="section-pad border-t border-border bg-surface-raised/30">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Contact</p>
            <h2 className="section-title mt-3">Let&apos;s Work Together</h2>
            <p className="mt-4 max-w-md text-muted">
              Have a project in mind or want to collaborate? Send me a message —
              I&apos;ll get back to you and you&apos;ll receive a confirmation
              email once it&apos;s sent.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:alka.kumari3289@gmail.com"
                className="block text-sm text-muted transition-colors hover:text-accent"
              >
                alka.kumari3289@gmail.com
              </a>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/alka204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition-colors hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/alka-kumari-7a0133267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card space-y-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Your name"
                    className={inputClass('name')}
                    autoComplete="name"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="you@example.com"
                    className={inputClass('email')}
                    autoComplete="email"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  placeholder="What's this about?"
                  className={inputClass('subject')}
                />
                {errors.subject && touched.subject && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && touched.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {statusMessage && (
                <div
                  className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : 'border-red-400/30 bg-red-400/10 text-red-300'
                  }`}
                  role="alert"
                >
                  {status === 'success' ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
