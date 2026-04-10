import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Calendar, MapPin, TrendingUp, Users, Code, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"
import { useCountUp } from "@/hooks/useCountUp"

const achievements = [
  {
    icon: Users,
    label: "Users Supported",
    value: 1000,
    suffix: "+",
    description: "Production app powering 1000+ active users",
    color: "oklch(0.72 0.22 220)",
  },
  {
    icon: Code,
    label: "Internal Tools Built",
    value: 5,
    suffix: "+",
    description: "Custom tools delivering 40% efficiency gain",
    color: "oklch(0.85 0.18 195)",
  },
  {
    icon: TrendingUp,
    label: "APIs Designed",
    value: 20,
    suffix: "+",
    description: "RESTful APIs powering core business logic",
    color: "oklch(0.65 0.25 300)",
  },
  {
    icon: Zap,
    label: "Workflow Time Reduction",
    value: 30,
    suffix: "%",
    description: "Automated pipelines cutting processing time by 30%",
    color: "oklch(0.75 0.18 145)",
  },
]

function StatCard({ stat }: { stat: typeof achievements[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const count = useCountUp(stat.value, 2000, inView)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group relative glass-card rounded-2xl p-6 gradient-border hover-lift"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${stat.color.replace(")", " / 0.1)")} 0%, transparent 70%)`,
        }}
      />
      <div className="relative">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `${stat.color.replace(")", " / 0.15)")}`,
            border: `1px solid ${stat.color.replace(")", " / 0.3)")}`,
          }}
        >
          <Icon size={18} style={{ color: stat.color }} />
        </div>
        <div
          className="text-4xl font-extrabold mb-1"
          style={{ color: stat.color, textShadow: `0 0 20px ${stat.color.replace(")", " / 0.4)")}` }}
        >
          {count}{stat.suffix}
        </div>
        <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
        <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.72 0.22 220 / 0.04) 0%, transparent 70%)",
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
            Where I've Worked
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-4">
            Experience
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-1"
          >
            <motion.div
              variants={fadeInUp}
              className="relative glass-card rounded-2xl p-8 gradient-border"
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.72 0.22 220 / 0.06) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "oklch(0.72 0.22 220 / 0.12)",
                    border: "1px solid oklch(0.72 0.22 220 / 0.3)",
                    boxShadow: "0 0 20px oklch(0.72 0.22 220 / 0.2)",
                  }}
                >
                  <Building2 size={26} className="text-primary" />
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold text-foreground leading-tight">Software Developer</h3>
                  <div className="text-primary font-semibold mt-1">Dubai Medical Research Forum (DMRF)</div>
                  <div className="text-sm text-muted-foreground">Dubai Health Authority</div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary/60" />
                    <span>2023 — Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary/60" />
                    <span>Dubai, UAE</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "FastAPI", "Node.js", "MongoDB", "AI/LLM"].map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary/80 bg-primary/5"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {achievements.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-10 glass-card rounded-2xl p-8 gradient-border"
        >
          <motion.h4 variants={fadeInUp} className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: "oklch(0.72 0.22 220 / 0.15)", border: "1px solid oklch(0.72 0.22 220 / 0.3)" }}
            >
              <TrendingUp size={12} className="text-primary" />
            </span>
            Key Contributions
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Designed and deployed a production app supporting 1000+ concurrent users with high availability",
              "Built 5+ internal automation tools reducing team operational overhead by 40%",
              "Architected 20+ RESTful APIs consumed across multiple internal platforms",
              "Reduced critical workflow processing time by 30% through intelligent pipeline automation",
              "Implemented AI-assisted features for clinical workflow optimization",
              "Maintained 99.9% uptime across production services through robust error handling",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.72 0.22 220)", boxShadow: "0 0 6px oklch(0.72 0.22 220 / 0.8)" }}
                />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
