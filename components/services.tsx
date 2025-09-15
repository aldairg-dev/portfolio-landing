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
  Server,
  Database,
  Cloud,
  Code,
  Shield,
  Zap,
  Globe,
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Desarrollo de APIs REST",
    description: "APIs robustas y escalables con documentación completa",
    icon: Server,
    features: [
      "Arquitectura RESTful",
      "Documentación Swagger/OpenAPI",
      "Autenticación JWT",
      "Rate limiting y validación"
    ],
    technologies: ["Laravel", "Spring Boot", "Node.js", "Express"],
    price: "Desde $900.000 COP",
    popular: false
  },
  {
    id: 2,
    title: "Desarrollo de Software",
    description: "Aplicaciones completas a medida para tu negocio",
    icon: Code,
    features: [
      "Aplicaciones web completas",
      "Sistemas de gestión",
      "Integración de APIs",
      "Panel administrativo"
    ],
    technologies: ["Laravel", "React", "Vue.js", "MySQL"],
    price: "Desde $1.800.000 COP",
    popular: true
  },
  {
    id: 3,
    title: "Optimización de Bases de Datos",
    description: "Diseño y optimización de esquemas de BD para máximo rendimiento",
    icon: Database,
    features: [
      "Diseño de esquemas",
      "Optimización de consultas",
      "Indexación estratégica",
      "Migración de datos"
    ],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    price: "Desde $600.000 COP",
    popular: false
  },
  {
    id: 4,
    title: "Integración Cloud & DevOps",
    description: "Despliegue y configuración en la nube con CI/CD",
    icon: Cloud,
    features: [
      "Containerización Docker",
      "CI/CD pipelines",
      "Monitoreo y logging",
      "Auto-scaling"
    ],
    technologies: ["AWS", "Docker", "Jenkins", "Prometheus"],
    price: "Desde $1.200.000 COP",
    popular: false
  },
  {
    id: 5,
    title: "Seguridad Backend",
    description: "Implementación de mejores prácticas de seguridad",
    icon: Shield,
    features: [
      "Autenticación OAuth2",
      "Encriptación de datos",
      "Auditoría de seguridad",
      "OWASP compliance"
    ],
    technologies: ["JWT", "OAuth2", "SSL/TLS", "Bcrypt"],
    price: "Desde $800.000 COP",
    popular: false
  },
  {
    id: 6,
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para conversión",
    icon: Globe,
    features: [
      "Diseño responsive",
      "SEO optimizado",
      "Formularios de contacto",
      "Análisis de conversión"
    ],
    technologies: ["Next.js", "React", "Tailwind", "Vercel"],
    price: "Desde $450.000 COP",
    popular: false
  }
];

export default function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            Servicios Profesionales
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluciones Backend <span className="text-primary">Escalables</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformo tus ideas en arquitecturas backend robustas que impulsan el crecimiento de tu negocio.
            Desde APIs hasta microservicios, cada línea de código está optimizada para el éxito.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className={`h-full relative group hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    service.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        service.popular 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-sm">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Incluye
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className={`w-full group ${
                        service.popular ? 'bg-primary hover:bg-primary/90' : ''
                      }`}
                      variant={service.popular ? 'default' : 'outline'}
                    >
                      <Link href="#contact">
                        Solicitar Cotización
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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
          <div className="bg-card p-8 rounded-2xl border shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas algo más específico?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Ofrezco soluciones personalizadas adaptadas a tus necesidades específicas.
              Conversemos sobre tu proyecto y creemos algo extraordinario juntos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">
                  Consulta Personalizada
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">
                  Ver Casos de Éxito
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}