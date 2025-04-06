"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  const { name, email, subject, message } = data;
  const emailSubject = subject ? subject : `📩 Nuevo mensaje de ${name}`;

  if (!toEmail) {
    console.error("toEmail no está definido.");
    throw new Error("No se puede enviar el correo: toEmail no está definido");
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <devPortafolio@resend.dev>",
      to: toEmail,
      subject: emailSubject,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border-radius: 8px; background: #f9f9f9;">
          <h2 style="color: #007bff;">📬 Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="border-left: 4px solid #007bff; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <hr>
          <p style="font-size: 14px; color: #777;">📩 Este mensaje fue enviado desde tu portafolio.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }

    return { success: true, data: emailData };
  } catch (error: any) {
    console.error("Error in sendEmail:", error.message || error);
    throw new Error("Failed to send email");
  }
}
