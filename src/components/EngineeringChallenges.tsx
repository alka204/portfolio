import { motion } from "framer-motion";

const challenges = [
  {
    number: "01",
    problem: "How do you prevent duplicate payments?",
    solution:
      "Implemented idempotency keys so repeated checkout requests create only one successful payment instead of duplicate transactions.",
  },
  {
    number: "02",
    problem: "How do you stop two users buying the last item?",
    solution:
      "Reserve inventory before payment and use database transactions to prevent race conditions and overselling.",
  },
  {
    number: "03",
    problem: "How do backend services communicate reliably?",
    solution:
      "Use event-driven architecture so completed orders automatically trigger inventory updates, notifications, and analytics.",
  },
  {
    number: "04",
    problem: "How do you secure checkout APIs?",
    solution:
      "Protect endpoints using JWT authentication, request validation, authorization checks, and rate limiting.",
  },
];

export default function EngineeringChallenges() {
  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">Engineering Decisions</p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Engineering Challenges
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Real engineering problems solved while designing a production-ready
            ecommerce checkout architecture.
          </p>
        </motion.div>

        <div className="mt-20 space-y-8">
          {challenges.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="glass-card p-8 transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="text-6xl font-black text-accent/25">
                  {item.number}
                </div>

                <div className="flex-1">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Problem
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="mt-8 border-l-2 border-accent pl-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Solution
                    </p>

                    <p className="mt-3 leading-8 text-muted">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
