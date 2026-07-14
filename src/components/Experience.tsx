import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experienceProjects = [
  {
    title: "Swapnashilp Developers",
    description:
      "Designed the complete UI layout in Google Stitch for this Nagpur real estate brand, then built the responsive site using Cursor and Google Antigravity — project showcases, amenities, and lead capture flows.",
    tags: ["Google Stitch", "Cursor", "Antigravity", "UI Design"],
    link: "https://bhumilab.com/",
  },
  {
    title: "Pushpa Smart Windows",
    description:
      "Crafted the visual structure and component system in Google Stitch, then developed the production site with AI-assisted tooling (Cursor & Antigravity) — product catalog, project gallery, and quote forms.",
    tags: ["Google Stitch", "Cursor", "Antigravity", "Web Dev"],
    link: "https://pushpasmartwindows.com/",
  },
  {
    title: "247 Digital Pro",
    description:
      "End-to-end marketing agency website — UI designed in Google Stitch, built with Sanity CMS, Cursor, and Antigravity. Includes services, portfolio, blog, and contact sections with a polished business layout.",
    tags: ["Sanity", "Google Stitch", "Cursor", "Next.js"],
    link: "https://247-sanity.vercel.app/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">Experience</p>

          <h2 className="section-title mt-3">Frontend Developer Internship</h2>

          <p className="mt-4 text-muted">
            Worked on production-ready client websites using modern design
            workflows and AI-assisted development. Designed responsive
            interfaces, built reusable components, and delivered real-world
            business solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experienceProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -2,
                transition: { duration: 0.3 },
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-card/80 p-6 backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,188,212,0.12)]"
              style={{
                transformStyle: "preserve-3d",
              }}
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
                  Internship
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

              <div className="relative z-10 mt-auto pt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:text-white"
                >
                  <ExternalLink size={16} />
                  Visit Website
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
