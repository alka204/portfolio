import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title mt-3">My Skills</h2>
          <p className="mt-4 text-muted">
            Technologies, AI tools, and workflows I use to design and ship
            modern web experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group glass-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30"
            >
              <h3 className="text-lg font-semibold text-accent">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {category.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-sm text-white/90"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
