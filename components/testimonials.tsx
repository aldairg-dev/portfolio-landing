"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Building, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CTO",
    company: "TechStart Solutions",
    location: "Bogotá, Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=CM",
    rating: 5,
    testimonial: "Aldair transformó completamente nuestra arquitectura backend. Su conocimiento en Laravel y PostgreSQL nos permitió escalar de 1,000 a 50,000 usuarios sin problemas de rendimiento. Altamente recomendado.",
    project: "API E-commerce Platform",
    results: ["300% mejora en performance", "0 downtime en 6 meses", "Reducción del 60% en costos de servidor"]
  },
  {
    id: 2,
    name: "María González",
    role: "Product Manager",
    company: "FinanceFlow",
    location: "Madrid, España", 
    avatar: "/placeholder.svg?height=64&width=64&text=MG",
    rating: 5,
    testimonial: "La implementación de nuestro sistema de facturación electrónica fue impecable. Aldair entendió perfectamente los requerimientos fiscales y entregó una solución robusta que cumple con todas las normativas.",
    project: "Sistema de Facturación Electrónica",
    results: ["100% compliance fiscal", "Reducción del 80% en tiempo de facturación", "Integración perfecta con APIs gubernamentales"]
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "Founder & CEO",
    company: "EduTech Innovation",
    location: "Medellín, Colombia",
    avatar: "/placeholder.svg?height=64&width=64&text=RS",
    rating: 5,
    testimonial: "El sistema de votación que desarrolló Aldair para nuestra plataforma educativa es excepcional. La seguridad, transparencia y facilidad de uso superaron nuestras expectativas. Un profesional de primer nivel.",
    project: "Plataforma de Votación Estudiantil",
    results: ["99.9% uptime", "5,000+ votos procesados sin errores", "Auditoría completa implementada"]
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Lead Developer",
    company: "CloudWorks International",
    location: "Barcelona, España",
    avatar: "/placeholder.svg?height=64&width=64&text=AM",
    rating: 5,
    testimonial: "Trabajar con Aldair en la migración a microservicios fue una experiencia extraordinaria. Su conocimiento en Spring Boot y Docker nos ayudó a modernizar nuestra arquitectura de manera eficiente.",
    project: "Migración a Microservicios",
    results: ["Arquitectura escalable", "Deployment automatizado", "Monitoring distribuido implementado"]
  },
  {
    id: 5,
    name: "Luis Hernández",
    role: "IT Director",
    company: "RetailMax Corp",
    location: "Ciudad de México, México",
    avatar: "/placeholder.svg?height=64&width=64&text=LH",
    rating: 5,
    testimonial: "La optimización de nuestra base de datos PostgreSQL realizada por Aldair resultó en una mejora dramática del rendimiento. Las consultas que antes tomaban minutos ahora se ejecutan en segundos.",
    project: "Optimización de Base de Datos",
    results: ["95% reducción en tiempo de consultas", "Indexación optimizada", "Queries complejas optimizadas"]
  }
];

const stats = [
  { label: "Clientes Satisfechos", value: "25+", icon: "👥" },
  { label: "Proyectos Completados", value: "50+", icon: "🚀" },
  { label: "Años de Experiencia", value: "3+", icon: "⭐" },
  { label: "Tasa de Éxito", value: "100%", icon: "✅" }
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
            Lo que dicen mis <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La mejor validación de mi trabajo son las palabras de quienes han confiado en mí.
            Cada proyecto es una oportunidad de crear valor real para los negocios.
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