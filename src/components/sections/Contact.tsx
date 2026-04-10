import { motion } from "framer-motion"
import { Mail, Phone, GitFork, MapPin, ArrowUpRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rana.talhadxb@gmail.com",
    href: "mailto:rana.talhadxb@gmail.com",
    color: "oklch(0.72 0.22 220)",
    hint: "Best for project inquiries",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+971-551122578",
    href: "tel:+971551122578",
    color: "oklch(0.85 0.18 195)",
    hint: "Available 9AM–6PM GST",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/Talha-glitched",
    href: "https://github.com/Talha-glitched",
    color: "oklch(0.65 0.25 300)",
    hint: "See my open source work",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    href: null,
    color: "oklch(0.75 0.18 145)",
    hint: "Open to remote & local roles",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 pb-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 60%, oklch(0.72 0.22 220 / 0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(oklch(0.3 0.05 240 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(0.3 0.05 240 / 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading gradient-text mb-4">
            Let's Build Together
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have an AI project, backend challenge, or automation opportunity?
            I'm actively exploring new roles and collaborations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
        >
          {contacts.map((c) => {
            const Icon = c.icon
            const Wrapper = c.href ? motion.a : motion.div
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                className="group relative glass-card rounded-2xl p-6 gradient-border hover-lift block"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 0% 50%, ${c.color.replace(")", " / 0.08)")} 0%, transparent 70%)`,
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${c.color.replace(")", " / 0.12)")}`,
                      border: `1px solid ${c.color.replace(")", " / 0.3)")}`,
                      boxShadow: `0 0 0 0 ${c.color.replace(")", " / 0)")}`,
                    }}
                  >
                    <Icon size={20} style={{ color: c.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                    <div className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {c.value}
                    </div>
                    <div className="text-xs text-muted-foreground/70 mt-0.5">{c.hint}</div>
                  </div>
                  {c.href && (
                    <ArrowUpRight
                      size={16}
                      className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-5 glass-card gradient-border"
          >
            <MessageSquare size={18} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Typically replies within <span className="text-primary font-semibold">2 hours</span> during business hours
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              size="lg"
              className="px-8 neon-glow-blue"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.22 220), oklch(0.65 0.25 300))",
                border: "none",
              }}
              asChild
            >
              <a href="mailto:rana.talhadxb@gmail.com">
                <Mail size={16} className="mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/Talha-glitched" target="_blank" rel="noopener noreferrer">
                <GitFork size={16} className="mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-20 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-muted-foreground/50 text-sm">
            © {new Date().getFullYear()} Talha Nadeem — AI Engineer
            <span className="mx-2">·</span>
            Dubai, UAE
          </p>
        </motion.div>
      </div>
    </section>
  )
}
