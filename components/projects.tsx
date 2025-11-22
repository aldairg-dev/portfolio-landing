"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "TecnoPro",
    shortDesc: "Plataforma para gestión de semilleros de investigación",
    description:
      "Desarrollo del sistema TecnoPro, una plataforma para la gestión de semilleros de investigación, orientada a optimizar procesos administrativos, seguimiento de proyectos y vinculación entre estudiantes, docentes y coordinadores.",
    image: [
      "img/project/tecnoPro/dashboard.png",
      "img/project/tecnoPro/estadistica.png",
      "img/project/tecnoPro/login.png",
    ],
    tags: ["Laravel", "PostgreSQL", "Trabajo en equipo"],
    backendTech: ["Laravel", "PostgreSQL", "API REST", "Autenticación"],
    features: [
      "Gestión de semilleros",
      "Seguimiento de proyectos",
      "Vinculación estudiante-docente",
      "Procesos administrativos",
    ],
    metrics: {
      performance: "99.7% uptime",
      users: "300+ usuarios académicos",
      transactions: "5K+ proyectos gestionados",
    },
    demoUrl: "https://tecnopro.tecnologicocomfenalco.edu.co/login",
    repoUrl: "#",
    category: "Education",
    year: "2024",
    status: "En producción",
  },
  {
    id: 2,
    title: "E-Factura",
    shortDesc: "Sistema de facturación electrónica empresarial",
    description:
      "Sistema completo de facturación electrónica integrado con las API's oficiales de Factus Halltec. Automatiza procesos de facturación, inventarios y reportes financieros cumpliendo con todas las normativas legales vigentes.",
    image: [
      "img/project/efactura/compras.png",
      "img/project/efactura/home.png",
      "img/project/efactura/facturas.png",
    ],
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    backendTech: ["Laravel 10", "PostgreSQL", "Redis", "API REST"],
    features: [
      "Facturación automática",
      "Gestión de inventarios",
      "Reportes en tiempo real",
      "Integración con SAT",
    ],
    metrics: {
      performance: "99.9% uptime",
      users: "500+ empresas",
      transactions: "50K+ facturas/mes",
    },
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/E-Factura",
    category: "Enterprise",
    year: "2024",
    status: "Completado",
  },
  {
    id: 3,
    title: "StudentChoice",
    shortDesc: "Plataforma de votación estudiantil segura",
    description:
      "Sistema robusto de votación estudiantil con arquitectura segura, autenticación multifactor y auditoría completa. Garantiza transparencia, seguridad y eficiencia en procesos electorales educativos.",
    image: [
      "img/project/studentChoise/home.png",
      "img/project/studentChoise/dashboard.png",
      "img/project/studentChoise/historial.png",
    ],
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    backendTech: ["Laravel 10", "PostgreSQL", "Queue Jobs", "Broadcasting"],
    features: [
      "Votación en tiempo real",
      "Autenticación segura",
      "Auditoría completa",
      "Resultados instantáneos",
    ],
    metrics: {
      performance: "99.8% uptime",
      users: "5K+ estudiantes",
      transactions: "10K+ votos procesados",
    },
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/StudentChoice",
    category: "Government",
    year: "2023",
    status: "Completado",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    projects.forEach((project) => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [project.id]: ((prev[project.id] || 0) + 1) % project.image.length,
        }));
      }, 4000 + project.id * 1000); // Stagger the intervals

      return () => clearInterval(interval);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
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
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Casos de Éxito
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proyectos que <span className="text-primary">Transforman</span>{" "}
            Negocios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto es una historia de éxito. Desde startups hasta
            empresas consolidadas, he desarrollado soluciones backend que
            escalan y generan valor real.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full aspect-video bg-gradient-to-br from-background to-muted">
                    {project.image.map((img, imgIndex) => (
                      <Image
                        key={`${project.id}-img-${imgIndex}`}
                        src={img}
                        alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                        width={600}
                        height={400}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
                          imgIndex === (currentImageIndex[project.id] || 0)
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "/placeholder.svg?height=400&width=600&text=" +
                            encodeURIComponent(project.title);
                        }}
                      />
                    ))}
                    {/* Overlay with status */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-green-500/90 hover:bg-green-500">
                        {project.status}
                      </Badge>
                      <Badge variant="secondary">{project.year}</Badge>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge
                      variant="outline"
                      className="text-primary border-primary"
                    >
                      {project.category}
                    </Badge>
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mb-4">
                    {project.shortDesc}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Backend Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    Tecnologías Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.backendTech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Características Clave
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Métricas de Rendimiento
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-primary">
                        {project.metrics.performance}
                      </div>
                      <div className="text-muted-foreground">
                        Disponibilidad
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-primary">
                        {project.metrics.users}
                      </div>
                      <div className="text-muted-foreground">
                        Usuarios activos
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-primary">
                        {project.metrics.transactions}
                      </div>
                      <div className="text-muted-foreground">Transacciones</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl !== "#" ? (
                    <Button asChild variant="default" size="lg" className="group">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Ver Producto en Vivo
                      </Link>
                    </Button>
                  ) : project.repoUrl !== "#" ? (
                    <Button asChild variant="default" size="lg" className="group">
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Ver Código
                      </Link>
                    </Button>
                  ) : null}
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">
                      Proyecto Similar
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para tu próximo proyecto?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estos son solo algunos ejemplos. Cada proyecto es único y está
              diseñado para resolver desafíos específicos. Conversemos sobre tu
              próxima idea.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Empezar mi Proyecto</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
