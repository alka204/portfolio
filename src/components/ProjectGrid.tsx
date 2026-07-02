import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.type === 'github' ? Github : ExternalLink

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group glass-card flex flex-col p-5 transition-all duration-300 hover:-translate-y-2 hover:border-accent/25 sm:p-6"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-md border border-border bg-surface-raised px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle">
          {project.type === 'github' ? 'Open Source' : 'Live Site'}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-subtle transition-colors group-hover:border-accent/20 group-hover:text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:text-white"
        >
          <Icon size={16} />
          {project.linkLabel}
        </a>

        {project.secondaryLink && project.secondaryLinkLabel && (
          <a
            href={project.secondaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-all duration-300 hover:gap-3 hover:text-accent"
          >
            <ExternalLink size={16} />
            {project.secondaryLinkLabel}
          </a>
        )}
      </div>
    </motion.article>
  )
}

interface ProjectGridProps {
  id: string
  label: string
  title: string
  description: string
  projects: Project[]
}

export default function ProjectGrid({
  id,
  label,
  title,
  description,
  projects,
}: ProjectGridProps) {
  return (
    <section id={id} className="section-pad">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">{label}</p>
          <h2 className="section-title mt-3">{title}</h2>
          <p className="mt-4 text-muted">{description}</p>
        </motion.div>

        <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
