"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Users, Calendar, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Factura",
    description:
      "Sistema de facturación electrónica integrado con las API’s de Factus Halltec. Automatiza y optimiza la facturación cumpliendo con normativas legales vigentes.",
    image: [
      "img/project/efactura/compras.png",
      "img/project/efactura/home.png",
      "img/project/efactura/facturas.png",
    ],
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/E-Factura",
  },
  {
    id: 2,
    title: "StudentChoice",
    description:
      "Sistema de votación estudiantil desarrollado en Laravel, utilizando Jetstream, Livewire y Tailwind CSS, junto a PostgreSQL. Garantiza un proceso de votación seguro, eficiente y fácil de usar.",
    image: [
      "img/project/studentChoise/home.png",
      "img/project/studentChoise/dashboard.png",
      "img/project/studentChoise/historial.png",
    ],
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/StudentChoice",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projects[0].image.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selección de los proyectos más destacados en los que he
            trabajado, mostrando mis habilidades y experiencia en desarrollo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden w-full aspect-video">
                  {project.image.map((img, index) => (
                    <Image
                      key={`${project.id}-img-${index}`}
                      src={img}
                      alt={project.title || "Project Image"}
                      width={600}
                      height={400}
                      className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  {/* <Button asChild size="sm">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
