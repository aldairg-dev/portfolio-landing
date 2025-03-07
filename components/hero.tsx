"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
  const [text, setText] = useState("Aldair Gutierrez");
  const texts = ["Aldair Gutierrez", "Software Developer"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
              >
                Hola, soy
              </motion.span>
              <motion.span
                className="text-primary block"
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
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            >
              Detrás de cada aplicación que funciona sin problemas, hay un
              desarrollador backend que convirtió la lógica en magia.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
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
              transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
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
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 z-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 0 60px rgba(59,130,246,0.8)"
                    : "0 0 40px rgba(255,215,0,0.6)",
                filter: "blur(20px)",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={src}
                alt="Developer Portrait"
                width={500}
                height={500}
                className="relative z-10 rounded-full object-cover border-4 shadow-xl border-gray-800 dark:border-gray-300"
                priority
                onError={() => setSrc("/placeholder.svg?height=500&width=500")}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
