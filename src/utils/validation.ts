export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = data.name.trim()
  const email = data.email.trim()
  const subject = data.subject.trim()
  const message = data.message.trim()

  if (!name) {
    errors.name = 'Name is required.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (name.length > 80) {
    errors.name = 'Name must be under 80 characters.'
  }

  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!subject) {
    errors.subject = 'Subject is required.'
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.'
  } else if (subject.length > 120) {
    errors.subject = 'Subject must be under 120 characters.'
  }

  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  } else if (message.length > 2000) {
    errors.message = 'Message must be under 2000 characters.'
  }

  return errors
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
