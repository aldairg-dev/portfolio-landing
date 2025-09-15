"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Building,
  Clock
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const workExperience = [
  {
    id: 1,
    role: "Desarrollador PHP Freelance",
    company: "Home Select",
    location: "Madrid, España",
    period: "Agosto 2024 - Noviembre 2024",
    type: "Remoto",
    description:
      "Desarrollo e implementación de nuevas funcionalidades críticas utilizando PHP y Yii Framework. Mejora significativa en la eficiencia del sistema y optimización de procesos. Implementación de QA para garantizar alta calidad del software.",
    technologies: ["PHP", "Yii Framework", "MySQL", "JavaScript", "HTML/CSS"],
    achievements: [
      "Reducción del 40% en tiempo de respuesta",
      "Implementación de 15+ nuevas funcionalidades",
      "100% de pruebas QA exitosas"
    ]
  },
  {
    id: 2,
    role: "Pasante de Desarrollo de Software",
    company: "Fundación Universitaria Tecnológico Comfenalco",
    location: "Cartagena, Colombia",
    period: "Agosto 2023 - Presente",
    type: "Híbrido",
    description:
      "Desarrollo backend especializado en Laravel, contribuyendo a módulos críticos para aplicaciones administrativas institucionales. Enfoque en arquitectura limpia, código escalable y mejores prácticas de desarrollo.",
    technologies: ["Laravel", "PHP", "PostgreSQL", "Git", "Docker"],
    achievements: [
      "Desarrollo de 5+ módulos administrativos",
      "Implementación de mejores prácticas",
      "Optimización de procesos internos"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Ingeniería de Software",
    institution: "Fundación Universitaria Tecnológico Comfenalco",
    location: "Cartagena de Indias, Colombia",
    period: "2024 - Presente",
    status: "En curso",
    description: "Formación avanzada en arquitecturas de software, desarrollo escalable, metodologías ágiles y gestión de proyectos tecnológicos.",
    focus: ["Arquitectura de Software", "Metodologías Ágiles", "Gestión de Proyectos", "DevOps"]
  },
  {
    id: 2,
    degree: "Tecnólogo en Desarrollo de Software",
    institution: "Fundación Universitaria Tecnológico Comfenalco",
    location: "Cartagena de Indias, Colombia",
    period: "2021 - 2024",
    status: "Graduado",
    description: "Especialización en desarrollo backend con Laravel, PHP y bases de datos. Implementación de APIs RESTful y optimización de sistemas empresariales.",
    focus: ["Laravel Development", "API REST", "Bases de Datos", "Backend Development"]
  }
];

const certifications = [
  {
    id: 1,
    title: "Bootcamp Algorithmic Minds AI & DATA",
    institution: "Future Tales",
    issued: "Junio 2025",
    category: "Inteligencia Artificial",
    credentialUrl: "https://www.linkedin.com/in/aldair-gutierrez-guerrero/overlay/1757697230288/single-media-viewer/?profileId=ACoAAEL2hPABqvI2KXFpa4hljmfUNpUWdH2FO6E",
    description: "Bootcamp intensivo en IA y Data Science con proyectos prácticos de machine learning y algoritmos.",
    skills: ["Machine Learning", "Data Science", "Python", "Algoritmos"]
  },
  {
    id: 2,
    title: "Google Cloud Fundamentals: Core Infrastructure",
    institution: "Google",
    issued: "Febrero 2025",
    category: "Cloud Computing",
    credentialId: "4EC3XQI4PWCC",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4EC3XQI4PWCC",
    description: "Fundamentos de Google Cloud: redes, almacenamiento y computación en la nube.",
    skills: ["Google Cloud", "Cloud Computing", "Infrastructure", "DevOps"]
  },
  {
    id: 3,
    title: "Plan Estratégico Tecnologías de la Información (PETI)",
    institution: "MinTIC Colombia",
    issued: "Febrero 2025",
    category: "Gestión IT",
    credentialUrl: "https://lms.mintic.gov.co/mod/customcert/verify_certificate.php?contextid=98190&code=nbDyeH30fq&qrcode=1",
    description: "Estrategias para planificación y gestión eficiente de tecnologías de la información.",
    skills: ["IT Strategy", "Project Management", "Digital Transformation"]
  },
  {
    id: 4,
    title: "Reto Factus, Facturación Electrónica",
    institution: "HALLTEC",
    issued: "Febrero 2025",
    category: "Fintech",
    credentialUrl: "https://www.linkedin.com/in/aldair-gutierrez-guerrero/details/certifications/1739333235629/single-media-viewer/?profileId=ACoAAEL2hPABqvI2KXFpa4hljmfUNpUWdH2FO6E",
    description: "Implementación de facturación electrónica cumpliendo normativas vigentes.",
    skills: ["Electronic Billing", "API Integration", "Compliance", "PHP"]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Mi Trayectoria
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experiencia & <span className="text-primary">Formación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi crecimiento profesional y académico reflejado en proyectos reales,
            certificaciones reconocidas y una formación continua en tecnologías backend.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Experiencia</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Educación</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certificaciones</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workExperience.map((job) => (
                <motion.div key={job.id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Building className="h-5 w-5 text-primary" />
                            <Badge variant="outline" className="text-primary border-primary">
                              {job.type}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl md:text-2xl mb-2">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-base">
                            <div className="flex items-center gap-2 mb-1">
                              <Building className="h-4 w-4" />
                              {job.company}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-2 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="h-4 w-4 text-primary" />
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">
                          Logros Destacados
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div key={edu.id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            <Badge 
                              variant={edu.status === "Graduado" ? "default" : "secondary"}
                              className={edu.status === "Graduado" ? "bg-green-500 hover:bg-green-600" : ""}
                            >
                              {edu.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl md:text-2xl mb-2">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base">
                            <div className="flex items-center gap-2 mb-1">
                              <Building className="h-4 w-4" />
                              {edu.institution}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-2 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">
                          Áreas de Enfoque
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.focus.map((area) => (
                            <Badge key={area} variant="outline" className="border-primary text-primary">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="certifications">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="h-5 w-5 text-primary mt-1" />
                        <Badge variant="secondary" className="text-xs">
                          {cert.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-2 mb-1">
                          <Building className="h-4 w-4" />
                          {cert.institution}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {cert.issued}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-medium mb-2 text-sm">Habilidades</h5>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild variant="outline" size="sm" className="w-full group">
                        <Link
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Certificación
                          <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}