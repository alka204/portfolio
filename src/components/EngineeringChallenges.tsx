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
    <section className="border-t border-border bg-surface py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">Engineering Decisions</p>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-4xl md:text-5xl">
            Engineering Challenges
          </h2>

          <p className="mt-4 text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            Real engineering problems solved while designing a production-ready
            ecommerce checkout architecture.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6 sm:mt-20 sm:space-y-8">
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
              className="glass-card p-5 transition-all duration-300 hover:border-accent/40 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:gap-8 md:flex-row md:items-start">
                <div className="text-4xl font-black text-accent/30 sm:text-6xl">
                  {item.number}
                </div>

                <div className="flex-1">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Problem
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="mt-4 border-l-2 border-accent pl-4 sm:mt-8 sm:pl-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Solution
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted sm:mt-3 sm:text-base sm:leading-8">{item.solution}</p>
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
