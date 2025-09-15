"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code, Database, Server, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const [text, setText] = useState("Backend Developer");
  const texts = [
    "Backend Developer", 
    "API Architect", 
    "Database Expert",
    "System Designer"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);

  const { theme } = useTheme();
  const [src, setSrc] = useState("/image-dashboard.png");

  return (
    <section
      id="home"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 dark:from-background dark:via-background dark:to-primary/10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Badge */}
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🚀 Disponible para proyectos
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.span
                className="block text-foreground mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
              >
                Aldair Gutierrez
              </motion.span>
              <motion.span
                className="text-primary block text-3xl md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.span
                  className="typing-effect"
                  key={text}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    borderRight: "2px solid",
                  }}
                >
                  {text}
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            >
              Transformo ideas complejas en <span className="text-primary font-semibold">arquitecturas backend sólidas</span>. 
              Especializado en APIs escalables, bases de datos eficientes y sistemas distribuidos que impulsan el éxito de tu negocio.
            </motion.p>

            {/* Services Icons */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Server className="h-5 w-5 text-primary" />
                <span>APIs REST</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-5 w-5 text-primary" />
                <span>Bases de Datos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cloud className="h-5 w-5 text-primary" />
                <span>Cloud Services</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="h-5 w-5 text-primary" />
                <span>Microservicios</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            >
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Solicitar Servicios
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">Ver Proyectos</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
            >
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <Link
                  href="https://github.com/aldairg-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <Link
                  href="https://www.linkedin.com/in/aldair-gutierrez-guerrero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            {/* Glowing Background */}
            <motion.div
              className="absolute inset-0 z-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 0 100px rgba(59,130,246,0.3)"
                    : "0 0 60px rgba(59,130,246,0.2)",
                filter: "blur(40px)",
              }}
            />
            
            {/* Profile Image with enhanced hover effect */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <div className="relative">
                <Image
                  src={src}
                  alt="Aldair Gutierrez - Backend Developer"
                  width={500}
                  height={500}
                  className="rounded-full object-cover shadow-2xl border-4 border-primary/20"
                  priority
                  onError={() => setSrc("/placeholder.svg?height=500&width=500")}
                />
                {/* Floating tech icons around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full backdrop-blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Server className="h-6 w-6 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-accent/20 p-3 rounded-full backdrop-blur-sm"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Database className="h-6 w-6 text-accent-foreground" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
