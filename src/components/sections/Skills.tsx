import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"
import CardSwap, { Card } from "@/components/CardSwap"
const skillCategories = [
  {
    label: "Languages",
    color: "oklch(0.72 0.22 220)",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    label: "AI / LLM",
    color: "oklch(0.65 0.25 300)",
    skills: [
      { name: "OpenAI API", level: 95 },
      { name: "LangGraph", level: 90 },
      { name: "RAG Systems", level: 88 },
      { name: "Prompt Engineering", level: 92 },
    ],
  },
  {
    label: "Backend",
    color: "oklch(0.85 0.18 195)",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js", level: 87 },
      { name: "Express.js", level: 85 },
      { name: "Microservices", level: 82 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    label: "Frontend",
    color: "oklch(0.75 0.2 160)",
    skills: [
      { name: "React.js", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    label: "Databases",
    color: "oklch(0.8 0.18 80)",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    label: "Tools & Cloud",
    color: "oklch(0.78 0.16 40)",
    skills: [
      { name: "Docker", level: 83 },
      { name: "Git", level: 92 },
      { name: "Linux", level: 88 },
      { name: "AWS", level: 75 },
      { name: "Google Cloud", level: 72 },
    ],
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "oklch(0.15 0.02 240)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${color}, ${color.replace(")", " / 0.7)")})`,
            boxShadow: `0 0 8px ${color.replace(")", " / 0.4)")}`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, oklch(0.72 0.22 220 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-4">
            Technical Skills
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated stack for building intelligent, production-ready systems.
          </motion.p>
        </motion.div>

        <div className="flex justify-center mt-8 w-full md:mt-16 sm:px-10 lg:px-0">
          <div className="relative w-full max-w-[380px] mx-auto" style={{ height: '500px' }}>
            <CardSwap
              width={380}
              height={440}
              cardDistance={40}
              verticalDistance={40}
              delay={4000}
              pauseOnHover={true}
              skewAmount={8}
            >
              {skillCategories.map((cat) => (
                <Card
                  key={cat.label}
                  className="group relative glass-card rounded-2xl p-6 gradient-border text-left w-full h-full hover-lift cursor-pointer overflow-hidden"
                  style={{ background: 'oklch(0.1 0.015 240 / 0.95)', border: 'none' }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-100 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cat.color.replace(")", " / 0.12)")} 0%, transparent 80%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse-glow"
                        style={{
                          background: cat.color,
                          boxShadow: `0 0 10px ${cat.color}`,
                        }}
                      />
                      <Badge
                        variant="outline"
                        className="text-xs font-semibold px-3 py-1"
                        style={{
                          borderColor: `${cat.color.replace(")", " / 0.4)")}`,
                          color: cat.color,
                          background: `${cat.color.replace(")", " / 0.15)")}`,
                        }}
                      >
                        {cat.label}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {cat.skills.map((skill) => (
                        <SkillBar key={skill.name} {...skill} color={cat.color} />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}
