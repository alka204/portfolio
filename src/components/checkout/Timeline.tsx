import { motion } from "framer-motion";
import {
  ShieldCheck,
  ShoppingCart,
  Package,
  CreditCard,
  ClipboardList,
  Database,
  BellRing,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const timeline: TimelineStep[] = [
  {
    id: 1,
    title: "Authentication",
    description: "JWT token validation",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Cart Validation",
    description: "Verify cart items",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Inventory Check",
    description: "Reserve inventory",
    icon: Package,
  },
  {
    id: 4,
    title: "Payment",
    description: "Stripe authorization",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Order Creation",
    description: "Create order",
    icon: ClipboardList,
  },
  {
    id: 6,
    title: "Database",
    description: "Commit transaction",
    icon: Database,
  },
  {
    id: 7,
    title: "Events",
    description: "Publish notifications",
    icon: BellRing,
  },
  {
    id: 8,
    title: "Checkout Complete",
    description: "Order confirmed",
    icon: CheckCircle2,
  },
];

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= timeline.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-pad border-t border-border bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            Live Checkout Flow
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Request Timeline
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-muted">
            Every checkout request travels through multiple backend services.
            Watch authentication, inventory, payment, database transactions and
            event processing execute before an order is successfully completed.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-border" />

          <motion.div
            className="absolute left-0 top-8 h-1 rounded-full bg-accent"
            animate={{
              width: `${((activeStep + 1) / timeline.length) * 100}%`,
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-8">
            {timeline.map((step, index) => {
              const Icon = step.icon;
              const active = index <= activeStep;

              return (
                <motion.div
                  key={step.id}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    animate={{
                      scale: active ? [1, 1.08, 1] : 1,
                    }}
                    transition={{
                      repeat: active ? Infinity : 0,
                      duration: 1.2,
                    }}
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                      active
                        ? "border-accent bg-accent text-white shadow-[0_0_25px_rgba(0,188,212,0.45)]"
                        : "border-border bg-surface-card text-subtle"
                    }`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h3 className="mt-5 font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live Status Panel */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {/* Live Console */}

          <div className="rounded-3xl border border-border bg-surface-card/80 p-8 backdrop-blur-md">
            <h3 className="mb-6 text-xl font-bold text-white">
              Live Backend Logs
            </h3>

            <div className="space-y-4 font-mono text-sm">
              {timeline.slice(0, activeStep + 1).map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400"
                >
                  ✔ {step.title} completed successfully...
                </motion.div>
              ))}

              {activeStep === timeline.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300"
                >
                  🎉 Checkout Completed Successfully
                  <br />
                  Order ID: ORD-2026-10482
                  <br />
                  Payment Authorized
                  <br />
                  Email Notification Sent
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Metrics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-4"
        >
          <div className="rounded-2xl border border-border bg-surface-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
            <h2 className="text-3xl font-black text-accent">142 ms</h2>
            <p className="mt-2 text-muted">Average Response Time</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-6 text-center transition-all duration-300 hover:border-green-400/30 hover:-translate-y-1">
            <h2 className="text-3xl font-black text-green-400">99.98%</h2>
            <p className="mt-2 text-muted">API Success Rate</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-6 text-center transition-all duration-300 hover:border-purple-400/30 hover:-translate-y-1">
            <h2 className="text-3xl font-black text-purple-400">8</h2>
            <p className="mt-2 text-muted">Backend Services</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-6 text-center transition-all duration-300 hover:border-orange-400/30 hover:-translate-y-1">
            <h2 className="text-3xl font-black text-orange-400">2K+</h2>
            <p className="mt-2 text-muted">Requests / Second</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
