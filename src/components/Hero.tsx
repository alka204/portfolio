import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '3', label: 'Freelance Sites' },
  { value: '10+', label: 'Technologies' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="section-container flex min-h-screen flex-col justify-center pt-24 pb-16 lg:pt-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-border bg-surface/85 p-6 shadow-lg backdrop-blur-md sm:p-8"
        >
          <p className="section-label mb-4">Web Developer</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Hi, I&apos;m{' '}
            <span className="text-accent">Alka Kumari</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            I build modern, user-friendly websites — from clean UI design in
            Google Stitch to production-ready code with React, AI-assisted
            tools, and thoughtful engineering.
          </p>
          <p className="mt-3 max-w-lg text-base text-white/70">
            Turning ideas into polished digital experiences through design,
            development, and attention to detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-surface-raised/80 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/alka204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alka-kumari-7a0133267/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:alka.kumari3289@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-[4rem] border-b border-l border-border bg-surface-raised/50" />
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Currently
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Building &amp; Designing
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Freelance websites, React applications, and CMS-powered marketing
              sites — with a focus on responsive layouts and clean structure.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-subtle">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Sanity', 'Cursor', 'Node.js'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16 flex flex-col items-center gap-2 text-subtle transition-colors hover:text-accent"
        aria-label="Scroll to skills"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
