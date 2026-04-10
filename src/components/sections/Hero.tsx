import { motion } from "framer-motion"
import { ArrowDown, GitFork, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTyping } from "@/hooks/useTyping"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const floatingSnippets = [
  { code: "agent.run(task)", top: "18%", left: "5%", delay: 0 },
  { code: "llm.invoke(prompt)", top: "30%", right: "4%", delay: 1.2 },
  { code: "pipeline.execute()", bottom: "28%", left: "4%", delay: 0.6 },
  { code: "rag.query(docs)", bottom: "22%", right: "6%", delay: 1.8 },
  { code: "async def process():", top: "60%", left: "8%", delay: 2.2 },
  { code: "embeddings.search()", top: "14%", right: "9%", delay: 0.9 },
]

export function Hero() {
  const typedWord = useTyping(["LLMs", "Automation", "AI Agents", "Backend Systems", "RAG Pipelines"])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 20%, oklch(0.72 0.22 220 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.3 0.05 240 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.3 0.05 240 / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {floatingSnippets.map((s, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block glass rounded-lg px-4 py-2 text-xs font-mono text-primary/70 border-primary/20 select-none"
          style={{ top: s.top, left: (s as { left?: string }).left, right: (s as { right?: string }).right, bottom: (s as { bottom?: string }).bottom }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.9],
            y: [0, -12, -8, -20],
          }}
          transition={{
            duration: 8,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        >
          <span className="text-neon-cyan">{">"}</span> {s.code}
        </motion.div>
      ))}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm border-primary/40 text-primary bg-primary/10 backdrop-blur-sm"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Available for AI/Backend Roles — Dubai, UAE
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-foreground">Talha</span>
          <br />
          <span className="gradient-text">Nadeem</span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
          AI Engineer —
          <span className="neon-text-blue ml-2">LLM Systems</span>
          <span className="text-muted-foreground/60 mx-2">|</span>
          <span className="neon-text-cyan">Backend</span>
          <span className="text-muted-foreground/60 mx-2">|</span>
          <span style={{ color: "oklch(0.75 0.22 300)" }}>Automation</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 h-10 flex items-center justify-center gap-3">
          <span className="text-muted-foreground/50">Building</span>
          <span className="gradient-text min-w-[240px] text-left inline-block">
            {typedWord}
            <span className="animate-cursor inline-block ml-0.5 w-0.5 h-8 bg-primary align-middle" />
          </span>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting intelligent AI-driven pipelines, scalable microservices, and production-grade automation systems.
          Turning complex engineering problems into elegant, high-impact solutions.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base font-semibold neon-glow-blue rounded-xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.22 220), oklch(0.65 0.25 300))",
              border: "none",
            }}
            onClick={scrollToProjects}
          >
            View Projects
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-xl border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Talha-glitched"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <GitFork size={18} className="group-hover:scale-110 transition-transform" />
            <span>github.com/Talha-glitched</span>
          </a>
          <div className="w-px h-4 bg-border" />
          <a
            href="mailto:rana.talhadxb@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span>rana.talhadxb@gmail.com</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="flex flex-col items-center gap-2 text-muted-foreground/50 text-xs cursor-pointer hover:text-primary transition-colors"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Scroll</span>
          <ArrowDown size={16} />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.06 0.01 240))",
        }}
      />
    </section>
  )
}
