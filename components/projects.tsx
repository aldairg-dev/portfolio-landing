"use client";

import { useState } from "react";
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
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "StudentChoice",
    description:
      "Sistema de votación estudiantil desarrollado en Laravel, utilizando Jetstream, Livewire y Tailwind CSS, junto a PostgreSQL. Garantiza un proceso de votación seguro, eficiente y fácil de usar.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/StudentChoice",
  },
  {
    id: 2,
    title: "E-Factura",
    description:
      "Sistema de facturación electrónica integrado con las API’s de Factus Halltec. Automatiza y optimiza la facturación cumpliendo con normativas legales vigentes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Laravel", "Jetstream", "Livewire", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/2A2G/E-Factura",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
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
                  <Button asChild size="sm">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
