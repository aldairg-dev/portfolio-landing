"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [src, setSrc] = useState(
    "https://avatars.githubusercontent.com/u/112210730?s=400&u=803c89d66d1b14e6f0c113036e21c493261e93ca&v=4"
  );

  return (
    <section
      id="home"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="block">Hola, soy</span>
                <span className="block">Aldair Gutierrez</span>
                <span className="text-primary block">
                  Desarrollador de Software
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Detrás de cada aplicación que funciona sin problemas, hay un
              desarrollador backend que convirtió la lógica en magia.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild size="lg">
                <Link href="#projects">Ver Proyectos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contactar</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/2A2G"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
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
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* ✨ Aura animada con colores según el modo */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(to right, rgba(128, 0, 128, 0.4), rgba(75, 0, 130, 0.6))"
                      : "linear-gradient(to right, rgba(173, 216, 250, 0.4), rgba(230, 200, 250, 0.5))",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* 📸 Imagen con borde dinámico */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={src}
                  alt="Developer Portrait"
                  width={500}
                  height={500}
                  className={`relative z-10 rounded-full object-cover border-4 shadow-xl ${
                    theme === "dark" ? "border-gray-300" : "border-gray-800"
                  }`}
                  priority
                  onError={() =>
                    setSrc("/placeholder.svg?height=500&width=500")
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Button variant="ghost" size="icon" asChild>
            <Link href="#projects">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
