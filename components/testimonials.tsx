"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Building, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Edwin Torres Muñiz",
    role: "Backend Developer",
    company: "Java, Spring Boot, PHP, Laravel",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=ET",
    rating: 5,
    testimonial: "Trabajar con Aldair ha sido una experiencia muy positiva, más allá del gran talento que tiene para el desarrollo backend lo que realmente lo hace destacar es la gran capacidad que tiene para convertir los retos y obstáculos en oportunidades.",
    project: "Desarrollo de base de datos",
    results: ["Conversión de retos en oportunidades", "Participación indispensable", "Gran talento backend"]
  },
  {
    id: 2,
    name: "Carlos De La Rosa",
    role: "Desarrollador de Software",
    company: "Desarrollo de aplicaciones",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=CD",
    rating: 5,
    testimonial: "Trabajar con Aldair fue muy positivo. Destacó por su capacidad para adaptarse rápidamente, resolver problemas con eficacia y mantener una comunicación clara. Su enfoque en la calidad del código y su compromiso con el proyecto fueron claves.",
    project: "Desarrollo de aplicaciones",
    results: ["Adaptación rápida", "Comunicación clara", "Calidad del código", "Compromiso total"]
  },
  {
    id: 3,
    name: "Adrian Castro",
    role: "Desarrollador Back-end",
    company: "Desarrollo de aplicaciones",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=AC",
    rating: 5,
    testimonial: "Tuve la oportunidad de trabajar con Aldair en el desarrollo de aplicaciones y fue una experiencia altamente positiva. Se destaca por su sólida capacidad técnica, su enfoque en crear soluciones de calidad y su constante disposición para colaborar.",
    project: "Desarrollo de aplicaciones",
    results: ["Sólida capacidad técnica", "Soluciones de calidad", "Excelente colaboración", "Trabajo en equipo"]
  },
  {
    id: 4,
    name: "Carlos Escobar",
    role: "Desarrollador Frontend",
    company: "Laravel | PHP | Vue.js | Soluciones eficientes y escalables",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=CE",
    rating: 5,
    testimonial: "Con Aldair ha avanzado de manera positiva. Desde el inicio, hemos logrado establecer una comunicación fluida y una buena distribución de tareas. Aldair ha demostrado compromiso y responsabilidad, aportando ideas útiles y cumpliendo con los plazos establecidos.",
    project: "Desarrollo de aplicaciones",
    results: ["Comunicación fluida", "Buena distribución de tareas", "Compromiso y responsabilidad", "Cumplimiento de plazos"]
  },
  {
    id: 5,
    name: "Jeyson Miranda",
    role: "Tecnólogo en Desarrollo de Software",
    company: "Especialista en Back-End | Java, Python, Laravel, SQL",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=JM",
    rating: 5,
    testimonial: "Trabajar con Aldair ha sido una experiencia excelente. Desde el inicio del proyecto demostró una gran capacidad técnica, especialmente en desarrollo backend, y siempre estuvo dispuesto a proponer soluciones eficaces ante los desafíos que surgieron.",
    project: "Desarrollo de base de datos",
    results: ["Gran capacidad técnica", "Soluciones eficaces", "Comunicación constante", "Compromiso con la calidad"]
  },
  {
    id: 6,
    name: "Martin Medrano",
    role: "Desarrollador Frontend",
    company: "React · Next.js · Node.js",
    location: "Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=MM",
    rating: 5,
    testimonial: "Tuve la oportunidad de trabajar con Aldair como desarrollador web y fue una experiencia excelente. Destaca por su habilidad técnica, su enfoque en la calidad del código y su disposición para colaborar y aportar soluciones efectivas.",
    project: "Desarrollo web",
    results: ["Habilidad técnica destacada", "Calidad del código", "Colaboración efectiva", "Gran espíritu de equipo"]
  }
];

const stats = [
  { label: "Valoración Promedio", value: "4.9/5", icon: "⭐" },
  { label: "Reseñas Reales", value: "6", icon: "💬" },
  { label: "Colaboradores", value: "15+", icon: "👥" },
  { label: "Satisfacción", value: "100%", icon: "✅" }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Testimonios
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen mis <span className="text-primary">Colaboradores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reseñas reales de LinkedIn de desarrolladores que han trabajado conmigo.
            Su experiencia trabajando en equipo es la mejor validación de mi profesionalismo.
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start">
                      <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm text-primary mb-2">
                        Proyecto: {testimonial.project}
                      </div>
                      <div className="space-y-1">
                        {testimonial.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Building className="h-3 w-3" />
                          {testimonial.company}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-3xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">
                ¿Quieres ser el próximo caso de éxito?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Cada testimonio representa horas de trabajo dedicado, problemas resueltos y objetivos alcanzados.
                Tu proyecto podría ser el próximo en transformar un negocio.
              </p>
              <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact" className="px-4 py-2">
                  Empezar mi Historia de Éxito
                </a>
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}