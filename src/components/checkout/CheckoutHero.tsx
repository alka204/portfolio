import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Github,
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
    <section className="relative overflow-hidden border-t border-border bg-surface py-28">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
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
              className="inline-flex rounded-full border border-border bg-surface-card px-4 py-2 text-sm font-semibold text-accent"
            >
              Full Stack Backend Engineering Showcase
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl"
            >
              Production
              <br />
              Checkout
              <span className="text-accent"> System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-xl text-lg leading-8 text-muted"
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
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-3 rounded-xl bg-accent px-7 py-4 font-semibold text-black transition hover:bg-accent-hover">
                <Play size={18} />
                Run Live Simulation
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-border bg-surface-card px-7 py-4 font-semibold text-white transition hover:border-accent hover:text-accent">
                <Github size={18} />
                View Source
              </button>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div>
                <h2 className="text-3xl font-black text-white">7+</h2>
                <p className="mt-2 text-sm text-muted">Backend Services</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">12</h2>
                <p className="mt-2 text-sm text-muted">REST APIs</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">99.9%</h2>
                <p className="mt-2 text-sm text-muted">Availability</p>
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
            <div className="rounded-3xl border border-border bg-surface-card p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,188,212,0.08)]">
              <h3 className="mb-8 text-xl font-bold text-white">
                Engineering Highlights
              </h3>

              <div className="grid gap-5">
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
                      className="flex items-center gap-5 rounded-2xl border border-border bg-surface-raised p-5 transition"
                    >
                      <div className="rounded-xl bg-accent/10 p-3 text-accent">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {feature.title}
                        </h4>

                        <p className="mt-1 text-sm text-muted">
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
                className="mt-8 rounded-2xl bg-accent p-6 text-black"
              >
                <p className="text-sm uppercase tracking-wider opacity-70">
                  Case Study
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  End-to-End Checkout Flow
                </h3>

                <p className="mt-3 text-black/70">
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
