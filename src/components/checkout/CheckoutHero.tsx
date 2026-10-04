import { motion } from "framer-motion";
import {
  // ArrowRight,
  // Play,
  // Github,
  ShieldCheck,
  Database,
  CreditCard,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Backend Architecture",
  },
  {
    icon: CreditCard,
    title: "Payment Workflows",
  },
  {
    icon: ShieldCheck,
    title: "Security",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
  },
];

const CheckoutHero = () => {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-16 sm:py-24 lg:py-28">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] sm:h-112.5 sm:w-112.5" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex rounded-full border border-border bg-surface-card px-3.5 py-1.5 text-xs font-semibold text-accent sm:px-4 sm:py-2 sm:text-sm"
            >
              Full Stack Backend Engineering Showcase
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-7xl"
            >
              Production{" "}
              <br className="hidden sm:inline" />
              Checkout
              <span className="text-accent"> System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8"
            >
              An interactive engineering showcase demonstrating how a modern
              ecommerce checkout system is built using scalable backend
              architecture, secure payment processing, API orchestration,
              databases, cloud deployment, and event-driven services.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 sm:mt-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("simulation")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full justify-center inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 font-semibold text-black transition hover:bg-accent-hover hover:scale-105 sm:w-auto"
              >
                Run Live Simulation
              </button>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-12 grid grid-cols-3 gap-3 text-center sm:mt-16 sm:gap-8 sm:text-left"
            >
              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">7+</h2>
                <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">Backend Services</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">12</h2>
                <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">REST APIs</p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">99.9%</h2>
                <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">Availability</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-border bg-surface-card p-5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,188,212,0.08)] sm:p-8">
              <h3 className="mb-6 text-lg font-bold text-white sm:mb-8 sm:text-xl">
                Engineering Highlights
              </h3>

              <div className="grid gap-4 sm:gap-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-surface-raised p-4 transition sm:gap-5 sm:p-5"
                    >
                      <div className="rounded-xl bg-accent/10 p-2.5 text-accent sm:p-3">
                        <Icon size={24} className="sm:h-7 sm:w-7" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">
                          {feature.title}
                        </h4>

                        <p className="mt-0.5 text-xs text-muted sm:mt-1 sm:text-sm">
                          Production-grade implementation
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Card */}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="mt-6 rounded-2xl bg-accent p-5 text-black sm:mt-8 sm:p-6"
              >
                <p className="text-xs uppercase tracking-wider opacity-80 sm:text-sm">
                  Case Study
                </p>

                <h3 className="mt-1.5 text-xl font-bold sm:mt-2 sm:text-2xl">
                  End-to-End Checkout Flow
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-black/80 sm:mt-3 sm:text-sm">
                  From API Gateway to Payment Processing, Database Transactions,
                  Event Queue, Notifications, and Cloud Deployment.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHero;
