"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Rocket,
  DollarSign,
  Calendar,
  Globe,
  Linkedin,
  Github,
} from "lucide-react";
import { sendEmail } from "@/app/actions";
import Modal from "@/components/ui/modal-enhanced";
import Link from "next/link";

const serviceTypes = [
  { value: "api-development", label: "Desarrollo de APIs REST" },
  { value: "software-development", label: "Desarrollo de Software" },
  { value: "database-optimization", label: "Optimización de Bases de Datos" },
  { value: "cloud-integration", label: "Integración Cloud & DevOps" },
  { value: "security-implementation", label: "Seguridad Backend" },
  { value: "landing-pages", label: "Landing Pages" },
  { value: "custom-solution", label: "Solución Personalizada" },
  { value: "consultation", label: "Consultoría Técnica" },
];

const projectBudgets = [
  { value: "500000-1000000", label: "$500.000 - $1.000.000 COP" },
  { value: "1000000-2500000", label: "$1.000.000 - $2.500.000 COP" },
  { value: "2500000-5000000", label: "$2.500.000 - $5.000.000 COP" },
  { value: "5000000-10000000", label: "$5.000.000 - $10.000.000 COP" },
  { value: "10000000+", label: "$10.000.000+ COP" },
  { value: "to-discuss", label: "A discutir" },
];

const projectTimelines = [
  { value: "urgent", label: "Urgente (1-2 semanas)" },
  { value: "short", label: "Corto plazo (1 mes)" },
  { value: "medium", label: "Medio plazo (2-3 meses)" },
  { value: "long", label: "Largo plazo (3+ meses)" },
  { value: "flexible", label: "Flexible" },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "aldairg.dev@gmail.com",
    description: "Respuesta en 24 horas",
    action: "mailto:aldairg.dev@gmail.com",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+57 300 123 4567",
    description: "Respuesta inmediata",
    action: "https://wa.me/573001234567",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "aldair-gutierrez-guerrero",
    description: "Red profesional",
    action: "https://www.linkedin.com/in/aldair-gutierrez-guerrero",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type?: "success" | "error" | "info" | "warning";
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.serviceType
    ) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create detailed message
      const detailedMessage = `
NUEVA SOLICITUD DE SERVICIOS

=== INFORMACIÓN DEL CLIENTE ===
Nombre: ${formData.name}
Email: ${formData.email}
${formData.company ? `Empresa: ${formData.company}` : ""}
${formData.phone ? `Teléfono: ${formData.phone}` : ""}

=== DETALLES DEL PROYECTO ===
Servicio solicitado: ${
        serviceTypes.find((s) => s.value === formData.serviceType)?.label
      }
${
  formData.budget
    ? `Presupuesto: ${
        projectBudgets.find((b) => b.value === formData.budget)?.label
      }`
    : ""
}
${
  formData.timeline
    ? `Timeline: ${
        projectTimelines.find((t) => t.value === formData.timeline)?.label
      }`
    : ""
}

=== MENSAJE ===
${formData.message}
      `;

      await sendEmail({
        ...formData,
        subject:
          formData.subject ||
          `Solicitud de ${
            serviceTypes.find((s) => s.value === formData.serviceType)?.label
          }`,
        message: detailedMessage,
      });

      setModal({
        isOpen: true,
        title: "¡Solicitud Recibida con Éxito!",
        message:
          "Excelente! Tu solicitud ha sido procesada correctamente. Mi equipo y yo revisaremos todos los detalles y te enviaremos una propuesta personalizada con tiempos, costos y plan de trabajo en menos de 24 horas.",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "",
        budget: "",
        timeline: "",
        subject: "",
        message: "",
      });

      toast({
        title: "¡Éxito!",
        description: "Tu solicitud ha sido enviada correctamente.",
      });
    } catch (error) {
      setModal({
        isOpen: true,
        title: "Error en el Envío",
        message:
          "Lo siento, hubo un problema técnico al procesar tu solicitud. Por favor, intenta nuevamente o contáctame directamente por WhatsApp o email. Responderé inmediatamente.",
        type: "error",
      });

      toast({
        title: "Error",
        description:
          "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Solicitar Servicios
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hablemos de tu <span className="text-primary">Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una idea que necesita cobrar vida? Cuéntame los detalles y
            creemos juntos una solución backend que impulse tu negocio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info & Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contacto Directo
                </CardTitle>
                <CardDescription>
                  Prefiere contacto inmediato? Estos son mis canales directos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-start h-auto p-4 hover:bg-primary/5"
                      >
                        <Link href={method.action} target="_blank">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div className="text-left">
                              <div className="font-medium">{method.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {method.value}
                              </div>
                              <div className="text-xs text-primary">
                                {method.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Mi Proceso
                </CardTitle>
                <CardDescription>
                  Así es como trabajamos juntos desde la idea hasta el
                  lanzamiento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Análisis",
                      desc: "Entendemos tus necesidades",
                    },
                    {
                      step: 2,
                      title: "Propuesta",
                      desc: "Plan detallado y cotización",
                    },
                    {
                      step: 3,
                      title: "Desarrollo",
                      desc: "Implementación y actualizaciones",
                    },
                    {
                      step: 4,
                      title: "Entrega",
                      desc: "Deploy y documentación",
                    },
                  ].map((process, index) => (
                    <motion.div
                      key={process.step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                      <div>
                        <div className="font-medium">{process.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {process.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Solicitar Cotización
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te responderé con una propuesta
                  personalizada en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Nombre completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Empresa (opcional)
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Teléfono (opcional)
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Tipo de servicio *
                    </label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("serviceType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el servicio que necesitas" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Presupuesto estimado
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu presupuesto" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectBudgets.map((budget) => (
                            <SelectItem key={budget.value} value={budget.value}>
                              {budget.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Timeline del proyecto
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("timeline", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="¿Cuándo necesitas el proyecto?" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTimelines.map((timeline) => (
                            <SelectItem
                              key={timeline.value}
                              value={timeline.value}
                            >
                              {timeline.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Asunto
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ejemplo: Desarrollo de API para e-commerce"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Descripción del proyecto *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto: objetivos, funcionalidades necesarias, tecnologías preferidas, integraciones requeridas, etc. Mientras más detalles, mejor podré ayudarte."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas que me contacte contigo
                    para discutir tu proyecto. Respeto tu privacidad y no
                    compartiré tu información con terceros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Respuesta Garantizada en 24 Horas
              </h3>
              <p className="text-muted-foreground">
                Me comprometo a revisar tu solicitud y responder con una
                propuesta inicial en menos de 24 horas. Para proyectos urgentes,
                contáctame directamente por WhatsApp.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() =>
          setModal({ isOpen: false, title: "", message: "", type: "success" })
        }
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
      <Toaster />
    </section>
  );
}
