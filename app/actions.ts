"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

type EmailData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType: string;
  budget?: string;
  timeline?: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  const {
    name,
    email,
    company,
    phone,
    serviceType,
    budget,
    timeline,
    subject,
    message,
  } = data;
  const emailSubject = subject
    ? subject
    : `� Nueva Solicitud de Servicios - ${name}`;

  // Service type mapping for display
  const serviceTypes: { [key: string]: string } = {
    "api-development": "Desarrollo de APIs REST",
    "software-development": "Desarrollo de Software",
    "database-optimization": "Optimización de Bases de Datos",
    "cloud-integration": "Integración Cloud & DevOps",
    "security-implementation": "Seguridad Backend",
    "landing-pages": "Landing Pages",
    "custom-solution": "Solución Personalizada",
    consultation: "Consultoría Técnica",
  };

  const budgetRanges: { [key: string]: string } = {
    "500000-1000000": "$500.000 - $1.000.000 COP",
    "1000000-2500000": "$1.000.000 - $2.500.000 COP",
    "2500000-5000000": "$2.500.000 - $5.000.000 COP",
    "5000000-10000000": "$5.000.000 - $10.000.000 COP",
    "10000000+": "$10.000.000+ COP",
    "to-discuss": "A discutir",
  };

  const timelineOptions: { [key: string]: string } = {
    urgent: "Urgente (1-2 semanas)",
    short: "Corto plazo (1 mes)",
    medium: "Medio plazo (2-3 meses)",
    long: "Largo plazo (3+ meses)",
    flexible: "Flexible",
  };

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
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Solicitud de Servicios</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                🚀 Nueva Solicitud de Servicios
              </h1>
              <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px;">
                ${new Date().toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <!-- Client Information -->
            <div style="padding: 30px 20px 20px 20px;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                 Información del Cliente
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 35%;">
                    📋 Nombre Completo
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0; color: #1e293b;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">
                    📧 Email
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                ${
                  company
                    ? `
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">
                    🏢 Empresa
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0; color: #1e293b;">
                    ${company}
                  </td>
                </tr>
                `
                    : ""
                }
                ${
                  phone
                    ? `
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">
                    📱 Teléfono
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <a href="tel:${phone}" style="color: #059669; text-decoration: none; font-weight: 500;">${phone}</a>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

              <!-- Project Details -->
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                💼 Detalles del Proyecto
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 35%;">
                    🛠️ Servicio Solicitado
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-weight: 500;">
                      ${serviceTypes[serviceType] || serviceType}
                    </span>
                  </td>
                </tr>
                ${
                  budget
                    ? `
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">
                    💰 Presupuesto
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <span style="background-color: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-weight: 500;">
                      ${budgetRanges[budget] || budget}
                    </span>
                  </td>
                </tr>
                `
                    : ""
                }
                ${
                  timeline
                    ? `
                <tr>
                  <td style="padding: 10px 15px; background-color: #f1f5f9; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">
                    ⏰ Timeline
                  </td>
                  <td style="padding: 10px 15px; background-color: #ffffff; border: 1px solid #e2e8f0;">
                    <span style="background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-weight: 500;">
                      ${timelineOptions[timeline] || timeline}
                    </span>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

              <!-- Message -->
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                💬 Mensaje del Cliente
              </h2>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 16px;">
                  ${message.replace(/\n/g, "<br>")}
                </p>
              </div>

              <!-- Action Buttons -->
              <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
                <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Acciones Rápidas</h3>
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="mailto:${email}?subject=Re: ${subject}" 
                     style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; margin: 5px;">
                    � Responder Email
                  </a>
                </div>
                ${
                  phone
                    ? `
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="tel:${phone}" 
                     style="background-color: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; margin: 5px;">
                    📱 Llamar
                  </a>
                </div>
                `
                    : ""
                }
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #1e293b; padding: 20px; text-align: center;">
              <p style="color: #94a3b8; margin: 0; font-size: 14px;">
                📩 Mensaje enviado desde el Portfolio de Desarrollo Backend<br>
                <strong style="color: #e2e8f0;">aldairg.dev@gmail.com</strong>
              </p>
            </div>
          </div>
        </body>
        </html>
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
