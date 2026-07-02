import type { ContactFormData } from '../utils/validation'

export interface SendEmailResult {
  success: boolean
  message: string
}

export async function sendContactEmail(
  formData: ContactFormData,
): Promise<SendEmailResult> {
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
  }

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const responseText = await response.text()
    let responseData: { message?: string; success?: boolean } = {}

    if (responseText) {
      try {
        responseData = JSON.parse(responseText) as typeof responseData
      } catch {
        responseData = { message: responseText }
      }
    }

    if (!response.ok) {
      return {
        success: false,
        message:
          responseData.message ||
          responseText ||
          'Failed to send message. Please try again.',
      }
    }

    return {
      success: true,
      message:
        responseData.message ||
        'Message sent successfully! A confirmation email has been sent to your inbox.',
    }
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    }
  }
}
