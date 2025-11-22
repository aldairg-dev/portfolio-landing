"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Database,
  Cloud,
  Settings,
  Code,
  Shield,
  Zap,
  GitBranch,
  Terminal,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    id: "backend",
    name: "Backend Development",
    icon: Server,
    description: "Frameworks y lenguajes para desarrollo backend robusto",
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Laravel",
        level: 95,
        experience: "3+ años",
        projects: "8+ proyectos",
        description: "Framework principal, dominio de Eloquent, Blade, migraciones y seeders",
      },
      {
        name: "Spring Boot",
        level: 90,
        experience: "2+ años",
        projects: "3+ proyectos",
        description: "Desarrollo de microservicios y APIs escalables",
      },
      {
        name: "PHP",
        level: 92,
        experience: "4+ años",
        projects: "12+ proyectos",
        description: "Desarrollo backend y integración de sistemas",
      },
      {
        name: "Node.js",
        level: 80,
        experience: "2+ años",
        projects: "5+ proyectos",
        description: "APIs REST, Express.js y aplicaciones en tiempo real",
      },
      {
        name: "TypeScript",
        level: 78,
        experience: "1+ año",
        projects: "3+ proyectos",
        description: "Desarrollo tipado para Node.js y aplicaciones escalables",
      },
      {
        name: "Java",
        level: 85,
        experience: "2+ años",
        projects: "3+ proyectos",
        description: "Aplicaciones empresariales y microservicios",
      },
    ],
  },
  {
    id: "database",
    name: "Bases de Datos",
    icon: Database,
    description: "Diseño, optimización y administración de bases de datos",
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "PostgreSQL",
        level: 88,
        experience: "3+ años",
        projects: "6+ proyectos",
        description: "Base de datos principal para aplicaciones complejas",
      },
      {
        name: "MySQL",
        level: 85,
        experience: "3+ años",
        projects: "8+ proyectos",
        description: "Optimización y diseño de esquemas relacionales",
      },
      {
        name: "Redis",
        level: 75,
        experience: "1+ año",
        projects: "3+ proyectos",
        description: "Caché distribuido y almacenamiento en memoria",
      },
      {
        name: "MongoDB",
        level: 70,
        experience: "1+ año",
        projects: "4+ proyectos",
        description: "Base de datos NoSQL para aplicaciones flexibles",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: Cloud,
    description: "Contenedorización, despliegue y servicios en la nube",
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "Docker",
        level: 90,
        experience: "3+ años",
        projects: "10+ proyectos",
        description: "Contenedorización completa de aplicaciones y microservicios",
      },
      {
        name: "Azure",
        level: 75,
        experience: "2+ años",
        projects: "8+ proyectos",
        description: "Servicios cloud principales y infraestructura escalable",
      },
      {
        name: "Google Cloud",
        level: 65,
        experience: "1+ año",
        projects: "4+ proyectos",
        description: "Despliegue y gestión básica de aplicaciones",
      },
    ],
  },
  {
    id: "mobile",
    name: "Desarrollo Móvil",
    icon: Code,
    description: "Desarrollo de aplicaciones móviles multiplataforma",
    color: "from-indigo-500 to-purple-500",
    skills: [
      {
        name: "Flutter",
        level: 78,
        experience: "1+ año",
        projects: "3+ aplicaciones",
        description: "Desarrollo multiplataforma con diseño nativo",
      },
      {
        name: "Dart",
        level: 75,
        experience: "1+ año",
        projects: "3+ proyectos",
        description: "Lenguaje base para desarrollo Flutter",
      },
      {
        name: "Prisma ORM",
        level: 82,
        experience: "1+ año",
        projects: "5+ proyectos",
        description: "ORM moderno para Node.js y TypeScript",
      },
    ],
  },
  {
    id: "automation",
    name: "Automatización & Workflows",
    icon: Zap,
    description: "Automatización de procesos y creación de workflows",
    color: "from-yellow-500 to-orange-500",
    skills: [
      {
        name: "n8n",
        level: 88,
        experience: "2+ años",
        projects: "12+ workflows",
        description: "Creación de workflows y automatización de procesos",
      },
      {
        name: "Telegram Bot API",
        level: 85,
        experience: "1+ año",
        projects: "8+ integraciones",
        description: "Integración con Telegram para notificaciones automáticas",
      },
      {
        name: "Email Automation",
        level: 90,
        experience: "2+ años",
        projects: "15+ proyectos",
        description: "Automatización de envío de emails y newsletters",
      },
      {
        name: "Microsoft SharePoint",
        level: 80,
        experience: "1+ año",
        projects: "6+ integraciones",
        description: "Integración con Excel Online y automatización de datos",
      },
      {
        name: "Google Drive API",
        level: 85,
        experience: "1+ año",
        projects: "10+ integraciones",
        description: "Automatización de gestión de archivos y documentos",
      },
    ],
  },
  {
    id: "tools",
    name: "Herramientas & APIs",
    icon: Settings,
    description: "Herramientas de desarrollo y integración de APIs",
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Git",
        level: 92,
        experience: "4+ años",
        projects: "Todo proyecto",
        description: "Control de versiones y colaboración",
      },
      {
        name: "Postman",
        level: 90,
        experience: "3+ años",
        projects: "15+ proyectos",
        description: "Testing y documentación de APIs",
      },
      {
        name: "Swagger",
        level: 85,
        experience: "2+ años",
        projects: "10+ proyectos",
        description: "Documentación automática de APIs",
      },
      {
        name: "REST APIs",
        level: 95,
        experience: "3+ años",
        projects: "20+ proyectos",
        description: "Diseño e implementación de APIs escalables",
      },
      {
        name: "Yii Framework",
        level: 75,
        experience: "6+ meses",
        projects: "2+ proyectos",
        description: "Framework PHP para desarrollo empresarial",
      },
    ],
  },
];

const certificationStats = [
  { label: "Años de Experiencia", value: "3+", icon: Terminal },
  { label: "Proyectos Completados", value: "25+", icon: Code },
  { label: "Certificaciones", value: "6+", icon: Shield },
  { label: "Tecnologías Dominadas", value: "18+", icon: Cpu },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Stack Tecnológico
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tecnologías que <span className="text-primary">Domino</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi arsenal tecnológico está optimizado para crear backend
            escalables, APIs robustas y sistemas que crecen con tu negocio.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {certificationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-2 hover:border-primary/20 transition-colors"
              >
                <CardContent className="pt-6">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <CardHeader
                    className={`bg-gradient-to-r ${category.color} text-white`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {category.name}
                        </CardTitle>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: skillIndex * 0.1,
                          }}
                        >
                          {/* Skill Header */}
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-lg">
                                {skill.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {skill.description}
                              </p>
                            </div>
                            <Badge variant="outline" className="ml-4">
                              {skill.level}%
                            </Badge>
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1.5,
                                  delay: skillIndex * 0.1 + 0.3,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                          </div>

                          {/* Experience Stats */}
                          <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Terminal className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">
                                {skill.experience}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Code className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">
                                {skill.projects}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-8">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas estas tecnologías en tu proyecto?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Cada tecnología que domino está respaldada por experiencia real
                en proyectos de producción. Puedo ayudarte a elegir el stack
                perfecto para tu proyecto.
              </p>
              <Badge
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Hablemos de tu Stack Tecnológico
                  <Zap className="h-4 w-4" />
                </a>
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
