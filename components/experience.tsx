"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from "fs";

const workExperience = [
  {
    id: 1,
    role: "Pasante de Desarrollo de Software",
    company: "Fundación Universitaria Tecnológico Comfenalco",
    period: "Agosto 2023 - Presente",
    description:
      "Desarrollo backend con Laravel, contribuyendo a la creación de módulos críticos para aplicaciones administrativas. Enfoque en código limpio, escalable y alineado con las mejores prácticas. Optimización de procesos para mejorar la calidad del software.",
  },
  {
    id: 2,
    role: "Desarrollador PHP Freelance",
    company: "Home Select, Madrid - España",
    period: "Agosto 2024 - Noviembre 2024",
    description:
      "Implementación y desarrollo de nuevas funcionalidades en el sistema de software de la empresa utilizando PHP y Yii. Mejora de la eficiencia y adaptabilidad de las aplicaciones. Realización de tareas de QA para garantizar la calidad del software entregado.",
  },
];

const education = [
  {
    id: 1,
    degree: "Ingeniería de Software",
    institution:
      "Fundación Universitaria Tecnológico Comfenalco - Cartagena de Indias, Colombia",
    period: "2024 - Presente",
    description:
      "Formación en arquitecturas de software, desarrollo escalable y metodologías ágiles para la construcción de soluciones eficientes.",
  },
  {
    id: 2,
    degree: "Tecnólogo en Desarrollo de Software",
    institution:
      "Fundación Universitaria Tecnológico Comfenalco - Cartagena de Indias, Colombia",
    period: "2021 - 2024",
    description:
      "Desarrollo de software con enfoque en Laravel, PHP y bases de datos. Implementación de APIs RESTful y optimización de procesos en sistemas empresariales.",
  },
];

const certifications = [
  {
    id: 1,
    title: "Google Cloud Fundamentals: Core Infrastructure",
    institution: "Google",
    issued: "Febrero 2025",
    credential_id: "4EC3XQI4PWCC",
    link: "https://www.coursera.org/account/accomplishments/verify/4EC3XQI4PWCC",
    description:
      "Introducción a los conceptos y servicios fundamentales de Google Cloud, incluyendo redes, almacenamiento y computación en la nube.",
  },
  {
    id: 2,
    title: "Plan Estratégico Tecnologías de la Información (PETI)",
    institution:
      "Ministerio de Tecnologías de la Información y las Comunicaciones",
    issued: "Febrero 2025",
    link: "https://lms.mintic.gov.co/mod/customcert/verify_certificate.php?contextid=98190&code=nbDyeH30fq&qrcode=1",
    description:
      "Desarrollo de estrategias para la planificación y gestión eficiente de tecnologías de la información en organizaciones.",
  },
  {
    id: 3,
    title: "Reto Factus, Facturación Electrónica",
    institution: "HALLTEC",
    issued: "Febrero 2025",
    link: "https://www.linkedin.com/in/aldair-gutierrez-guerrero/details/certifications/1739333235629/single-media-viewer/?profileId=ACoAAEL2hPABqvI2KXFpa4hljmfUNpUWdH2FO6E",
    description:
      "Implementación y manejo de facturación electrónica en cumplimiento con la normativa vigente.",
  },
  {
    id: 4,
    title: "Curso de Fundamentos de Node.js",
    institution: "Platzi",
    issued: "Noviembre 2024",
    link: "https://www.linkedin.com/in/aldair-gutierrez-guerrero/details/certifications/1739336250158/single-media-viewer/?profileId=ACoAAEL2hPABqvI2KXFpa4hljmfUNpUWdH2FO6E",
    description:
      "Conceptos básicos y desarrollo de aplicaciones con Node.js, incluyendo módulos, eventos y asincronía.",
  },
  {
    id: 5,
    title: "Curso de Git y GitHub",
    institution: "Platzi",
    issued: "Noviembre 2024",
    link: "https://www.linkedin.com/in/aldair-gutierrez-guerrero/details/certifications/1739336282386/single-media-viewer/?profileId=ACoAAEL2hPABqvI2KXFpa4hljmfUNpUWdH2FO6E",
    description:
      "Gestión de versiones con Git y colaboración en proyectos con GitHub mediante ramas y control de cambios.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia y Formación
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y académica que ha formado mi perfil como
            desarrollador.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <TabsTrigger
              value="work"
              className="flex items-center justify-center gap-2"
            >
              <Briefcase className="h-4 w-4" />{" "}
              <span className="whitespace-nowrap">Experiencia Laboral</span>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center justify-center gap-2"
            >
              <GraduationCap className="h-4 w-4" />{" "}
              <span className="whitespace-nowrap">Formación Académica</span>
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="flex items-center justify-center gap-2"
            >
              <GraduationCap className="h-4 w-4" />{" "}
              <span className="whitespace-nowrap">Certificados</span>
            </TabsTrigger>
          </TabsList>
          <br />

          <TabsContent value="work" className="space-y-4 sm:space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">
                          {job.role}
                        </CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded self-start mt-1 sm:mt-0">
                        {job.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded self-start mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent
            value="certifications"
            className="space-y-4 sm:space-y-6"
          >
            {certifications.map((certi, index) => (
              <motion.div
                key={certi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">
                          {certi.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {certi.institution}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded self-start mt-1 sm:mt-0">
                        {certi.issued}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base mb-2 sm:mb-3">
                      {certi.description}
                    </p>
                    {certi.link && (
                      <div className="text-xs sm:text-sm">
                        <span className="font-medium">Credencial: </span>
                        <a
                          href={certi.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Ver certificación
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
