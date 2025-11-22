import Head from "next/head";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Aldair Gutierrez | Desarrollador Full-Stack & DevOps Specialist",
  description:
    "Desarrollador especializado en Backend (Laravel, Node.js), desarrollo móvil (Flutter), automatización (n8n) y containerización (Docker). Servicios profesionales integrales de desarrollo.",
  icons: {
    icon: "img/icon-logotipo.png",
  },
  keywords: [
    "desarrollador full-stack",
    "backend developer",
    "flutter developer", 
    "docker specialist",
    "Laravel developer",
    "Node.js developer",
    "automatización n8n",
    "Azure cloud",
  ],
  authors: [{ name: "Aldair Gutierrez" }],
  openGraph: {
    title: "Aldair Gutierrez | Desarrollador Full-Stack & DevOps",
    description: "Especialista en Backend, Mobile (Flutter), Docker y Automatización",
    type: "website",
  },
};

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
