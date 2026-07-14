import { motion } from "framer-motion";

const techStack = [
  "Node.js",
  "TypeScript",
  "Express",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
];

export default function EngineeringIdentity() {
  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <h2 className="text-center text-4xl font-black leading-tight text-white md:text-6xl">
            I design scalable{" "}
            <span className="text-accent">backend systems</span>,
            <br />
            APIs, databases and
            <br />
            cloud solutions.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-muted">
            Building secure, production-ready applications with modern backend
            architecture, scalable APIs, cloud infrastructure, and performant
            user experiences.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface-card px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,188,212,0.2)]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
