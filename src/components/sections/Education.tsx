import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"

const coursework = [
  "Artificial Intelligence",
  "Machine Learning",
  "Distributed Systems",
  "Database Systems",
  "Software Engineering",
  "Computer Networks",
  "Algorithm Design",
  "Data Structures",
]

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 30% 50%, oklch(0.72 0.22 220 / 0.05) 0%, transparent 70%)",
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
            Academic Background
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-4">
            Education
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="group relative glass-card rounded-2xl p-8 md:p-10 gradient-border"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.72 0.22 220 / 0.07) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(to right, transparent, oklch(0.72 0.22 220), transparent)",
                opacity: 0.4,
              }}
            />

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "oklch(0.72 0.22 220 / 0.12)",
                  border: "1px solid oklch(0.72 0.22 220 / 0.3)",
                  boxShadow: "0 0 30px oklch(0.72 0.22 220 / 0.2)",
                }}
              >
                <GraduationCap size={30} className="text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                    <div className="text-primary font-semibold mt-1">COMSATS University Islamabad</div>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit flex items-center gap-1.5 border-primary/30 text-primary bg-primary/10"
                  >
                    <Award size={12} />
                    Completed 2025
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar size={14} className="text-primary/60" />
                  <span>2021 — 2025</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <BookOpen size={14} className="text-primary" />
                    Relevant Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <motion.div
                        key={course}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
