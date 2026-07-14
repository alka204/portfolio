import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { personalProjects } from "../data/projects";

export default function Project() {
  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">Projects</p>

          <h2 className="section-title mt-3">Selected Projects</h2>

          <p className="mt-4 text-muted">
            A collection of full-stack applications, backend systems,
            dashboards, and production-ready web experiences.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {personalProjects.map((project, index) => {
            const Icon = project.type === "github" ? Github : ExternalLink;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-card/80 p-6 backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,188,212,0.12)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top,#00BCD410 0%,transparent 70%)",
                  }}
                />

                <div className="relative z-10 mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <span className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-subtle">
                    {project.type === "github" ? "Open Source" : "Live"}
                  </span>
                </div>

                <p className="relative z-10 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-subtle transition-all duration-300 group-hover:border-accent/30 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 mt-auto pt-6 flex flex-col gap-3">
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
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      {project.secondaryLinkLabel}
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
