"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const workExperience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Presente",
    description:
      "Desarrollo de aplicaciones web utilizando React, Next.js y TypeScript. Implementación de arquitecturas escalables y optimización de rendimiento.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Digital Solutions",
    period: "2018 - 2021",
    description:
      "Desarrollo de soluciones web completas utilizando MERN stack. Diseño e implementación de APIs RESTful y bases de datos NoSQL.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description:
      "Desarrollo de sitios web responsivos y aplicaciones interactivas utilizando JavaScript, HTML5 y CSS3.",
  },
]

const education = [
  {
    id: 1,
    degree: "Maestría en Ingeniería de Software",
    institution: "Universidad Tecnológica",
    period: "2019 - 2021",
    description:
      "Especialización en arquitecturas de software, metodologías ágiles y desarrollo de aplicaciones empresariales.",
  },
  {
    id: 2,
    degree: "Licenciatura en Ciencias de la Computación",
    institution: "Universidad Nacional",
    period: "2014 - 2018",
    description: "Formación en fundamentos de programación, estructuras de datos, algoritmos y desarrollo de software.",
  },
  {
    id: 3,
    degree: "Certificación en Desarrollo Web Avanzado",
    institution: "Tech Academy",
    period: "2016",
    description: "Formación intensiva en tecnologías web modernas, frameworks JavaScript y metodologías de desarrollo.",
  },
]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia y Formación</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y académica que ha formado mi perfil como desarrollador.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Experiencia Laboral
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Formación Académica
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="space-y-6">
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
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.role}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{job.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
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
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

