import type { Metadata } from "next"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador de Software",
  description: "Portfolio profesional de desarrollador de software con experiencia en desarrollo web y móvil",
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

