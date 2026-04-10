import { motion } from "framer-motion"
import { Brain, Server, Zap, Code as Code2 } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"

const strengths = [
  {
    icon: Brain,
    title: "LLM Systems",
    description: "Designing intelligent agents and RAG pipelines using LangGraph, OpenAI, and custom orchestration frameworks.",
    color: "oklch(0.72 0.22 220)",
    glow: "oklch(0.72 0.22 220 / 0.2)",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Building scalable microservices, REST APIs, and production systems with FastAPI, Node.js, and Express.",
    color: "oklch(0.85 0.18 195)",
    glow: "oklch(0.85 0.18 195 / 0.2)",
  },
  {
    icon: Zap,
    title: "Automation Pipelines",
    description: "Architecting end-to-end automation workflows that eliminate manual processes and scale with demand.",
    color: "oklch(0.65 0.25 300)",
    glow: "oklch(0.65 0.25 300 / 0.2)",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Delivering complete, production-ready applications from intelligent AI backends to polished React frontends.",
    color: "oklch(0.75 0.18 145)",
    glow: "oklch(0.75 0.18 145 / 0.2)",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 50%, oklch(0.65 0.25 300 / 0.05) 0%, transparent 70%)",
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
            Who I Am
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-6">
            About Me
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer specializing in AI systems and backend architecture.
            Based in Dubai, UAE, I build production-grade LLM pipelines, intelligent agents, and scalable backend services
            that solve real-world problems with measurable impact.
            With a strong foundation in CS from COMSATS University and hands-on industry experience,
            I bridge the gap between cutting-edge AI research and robust engineering.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative glass-card rounded-2xl p-6 gradient-border cursor-default hover-lift"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${item.glow} 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.color.replace(")", " / 0.15)")}`,
                    border: `1px solid ${item.color.replace(")", " / 0.3)")}`,
                    boxShadow: `0 0 20px ${item.glow}`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                <h3 className="font-bold text-base mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
