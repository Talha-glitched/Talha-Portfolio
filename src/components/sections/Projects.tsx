import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp, Zap, Clock, Bot, Database, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"

const projects = [
  {
    id: "lead-agent",
    title: "Autonomous Lead Intelligence Agent",
    subtitle: "AI Agent System",
    description: "A fully autonomous multi-agent system that automates the complete lead lifecycle — from discovery and qualification to outreach and follow-up. Built on LangGraph's stateful graph architecture with parallel agent execution.",
    icon: Bot,
    accentColor: "oklch(0.72 0.22 220)",
    metrics: [
      { label: "Lead Processing Speed", value: "10x Faster", icon: Zap },
      { label: "API Response Time", value: "<200ms", icon: Clock },
    ],
    tags: ["LangGraph", "OpenAI GPT-4", "FastAPI", "Python", "Redis"],
    highlights: [
      "Multi-agent orchestration with LangGraph state machines",
      "Parallel agent execution with automatic error recovery",
      "RAG-powered company research and prospect enrichment",
      "Automated personalized outreach at scale",
      "Real-time pipeline monitoring dashboard",
    ],
    flow: [
      { step: "Discovery", desc: "AI scrapes & qualifies leads" },
      { step: "Research", desc: "RAG-powered enrichment" },
      { step: "Outreach", desc: "Personalized messaging" },
      { step: "Follow-up", desc: "Autonomous nurture flow" },
    ],
  },
  {
    id: "crm",
    title: "AI-Enabled Lead Management CRM",
    subtitle: "Full-Stack CRM Platform",
    description: "A production-grade MERN stack CRM with deep AI integration. Features intelligent lead scoring, automated follow-up scheduling, sentiment analysis on communications, and predictive deal closure.",
    icon: Database,
    accentColor: "oklch(0.85 0.18 195)",
    metrics: [
      { label: "Efficiency Gain", value: "60% Faster", icon: Zap },
      { label: "Lead Scoring Accuracy", value: "94%", icon: Clock },
    ],
    tags: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI", "JWT"],
    highlights: [
      "AI-powered lead scoring and prioritization engine",
      "Intelligent follow-up scheduler with NLP parsing",
      "Sentiment analysis on all customer communications",
      "Real-time analytics dashboard with forecasting",
      "Role-based access control and audit logs",
    ],
    flow: [
      { step: "Capture", desc: "Multi-channel lead intake" },
      { step: "Score", desc: "AI qualification engine" },
      { step: "Nurture", desc: "Automated workflows" },
      { step: "Convert", desc: "Deal closure tracking" },
    ],
  },
  {
    id: "medassist",
    title: "MedAssist — AI Clinical Decision System",
    subtitle: "Healthcare AI Platform",
    description: "An AI-based clinical decision support system for medical professionals. Uses structured diagnostic workflows, evidence-based treatment recommendation, and explainable AI to assist physicians in complex case analysis.",
    icon: GitBranch,
    accentColor: "oklch(0.65 0.25 300)",
    metrics: [
      { label: "Decision Support Speed", value: "5x Faster", icon: Zap },
      { label: "Diagnostic Accuracy", value: "89%", icon: Clock },
    ],
    tags: ["FastAPI", "OpenAI", "LangChain", "React.js", "PostgreSQL", "Docker"],
    highlights: [
      "Structured clinical decision tree with AI-guided branching",
      "Evidence-based treatment protocol recommendations",
      "Explainable AI outputs with source citations",
      "HIPAA-compliant data architecture",
      "Integration with medical knowledge bases and PubMed",
    ],
    flow: [
      { step: "Intake", desc: "Patient symptom capture" },
      { step: "Analyze", desc: "AI differential diagnosis" },
      { step: "Recommend", desc: "Evidence-based protocols" },
      { step: "Explain", desc: "Reasoning transparency" },
    ],
  },
]

function FlowDiagram({ flow, color }: { flow: typeof projects[0]["flow"]; color: string }) {
  return (
    <div className="flex items-center gap-1 flex-wrap mt-4">
      {flow.map((step, i) => (
        <div key={i} className="flex items-center gap-1">
          <motion.div
            className="rounded-lg px-3 py-1.5 text-center"
            style={{
              background: `${color.replace(")", " / 0.1)")}`,
              border: `1px solid ${color.replace(")", " / 0.3)")}`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-xs font-bold" style={{ color }}>{step.step}</div>
            <div className="text-xs text-muted-foreground">{step.desc}</div>
          </motion.div>
          {i < flow.length - 1 && (
            <div className="text-muted-foreground/40 text-xs">→</div>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative glass-card rounded-2xl gradient-border overflow-hidden"
      layout
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${project.accentColor.replace(")", " / 0.07)")} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`,
          opacity: 0.5,
        }}
      />

      <div className="relative p-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${project.accentColor.replace(")", " / 0.12)")}`,
                border: `1px solid ${project.accentColor.replace(")", " / 0.3)")}`,
                boxShadow: `0 0 20px ${project.accentColor.replace(")", " / 0.15)")}`,
              }}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon size={22} style={{ color: project.accentColor }} />
            </motion.div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: project.accentColor }}>
                {project.subtitle}
              </div>
              <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
            </div>
          </div>
          <motion.button
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: `${project.accentColor.replace(")", " / 0.1)")}`,
              border: `1px solid ${project.accentColor.replace(")", " / 0.25)")}`,
            }}
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {expanded
              ? <ChevronUp size={14} style={{ color: project.accentColor }} />
              : <ChevronDown size={14} style={{ color: project.accentColor }} />
            }
          </motion.button>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.metrics.map((m) => {
            const MIcon = m.icon
            return (
              <div
                key={m.label}
                className="rounded-xl p-3 flex items-center gap-2"
                style={{
                  background: `${project.accentColor.replace(")", " / 0.08)")}`,
                  border: `1px solid ${project.accentColor.replace(")", " / 0.2)")}`,
                }}
              >
                <MIcon size={14} style={{ color: project.accentColor }} />
                <div>
                  <div className="text-base font-bold" style={{ color: project.accentColor }}>{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs"
              style={{
                borderColor: `${project.accentColor.replace(")", " / 0.3)")}`,
                color: project.accentColor,
                background: `${project.accentColor.replace(")", " / 0.08)")}`,
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <FlowDiagram flow={project.flow} color={project.accentColor} />

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="mt-6 pt-6 rounded-xl p-4"
                style={{
                  background: `${project.accentColor.replace(")", " / 0.05)")}`,
                  border: `1px solid ${project.accentColor.replace(")", " / 0.15)")}`,
                }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: project.accentColor }}>
                  Technical Highlights
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: project.accentColor, boxShadow: `0 0 6px ${project.accentColor}` }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 30%, oklch(0.65 0.25 300 / 0.05) 0%, transparent 70%)",
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
            What I've Built
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-grade AI systems and platforms built for real-world impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all px-8"
            asChild
          >
            <a href="https://github.com/Talha-glitched" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
