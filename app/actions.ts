"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789")

type EmailData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const { name, email, subject, message } = data
  const emailSubject = subject ? subject : `Nuevo mensaje de ${name}`

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["tu-email@ejemplo.com"],
      subject: emailSubject,
      reply_to: email,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    throw new Error("Failed to send email")
  }
}

