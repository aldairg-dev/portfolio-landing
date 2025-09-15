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
  title: "Aldair Gutierrez | Backend Developer & API Architect",
  description:
    "Desarrollador Backend especializado en APIs escalables, microservicios y arquitecturas distribuidas. Laravel, Spring Boot, Node.js. Servicios profesionales de desarrollo.",
  icons: {
    icon: "img/icon-2A2G.png",
  },
  keywords: [
    "backend developer",
    "API development",
    "microservices",
    "Laravel developer",
    "Spring Boot",
    "database optimization",
    "cloud architecture",
  ],
  authors: [{ name: "Aldair Gutierrez" }],
  openGraph: {
    title: "Aldair Gutierrez | Backend Developer",
    description: "Desarrollador Backend especializado en soluciones escalables",
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
