import { Background } from "@/components/Background"
import SplashCursor from "@/components/SplashCursor"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Background />
      <SplashCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
