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
    <section className="border-t border-border bg-surface py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent sm:px-4 sm:py-2 sm:text-sm">
            Live Checkout Flow
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:mt-6 sm:text-5xl">
            Request Timeline
          </h2>

          <p className="mt-4 max-w-3xl text-base text-muted sm:mt-6 sm:text-lg">
            Every checkout request travels through multiple backend services.
            Watch authentication, inventory, payment, database transactions and
            event processing execute before an order is successfully completed.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-12 sm:mt-20">
          <div className="hidden md:block absolute left-0 right-0 top-8 h-1 rounded-full bg-border" />

          <motion.div
            className="hidden md:block absolute left-0 top-8 h-1 rounded-full bg-accent"
            animate={{
              width: `${((activeStep + 1) / timeline.length) * 100}%`,
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 xl:grid-cols-8">
            {timeline.map((step, index) => {
              const Icon = step.icon;
              const active = index <= activeStep;

              return (
                <motion.div
                  key={step.id}
                  whileHover={{ y: -6 }}
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
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all duration-300 sm:h-16 sm:w-16 ${
                      active
                        ? "border-accent bg-accent text-white shadow-[0_0_25px_rgba(0,188,212,0.45)]"
                        : "border-border bg-surface-card text-subtle"
                    }`}
                  >
                    <Icon size={24} className="sm:h-7 sm:w-7" />
                  </motion.div>

                  <h3 className="mt-3 text-sm font-semibold text-white sm:mt-5 sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">{step.description}</p>
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
          className="mt-12 grid gap-8 sm:mt-20 lg:grid-cols-2"
        >
          {/* Live Console */}

          <div className="rounded-3xl border border-border bg-surface-card/80 p-5 backdrop-blur-md sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              Live Backend Logs
            </h3>

            <div className="space-y-3 font-mono text-xs overflow-x-auto sm:space-y-4 sm:text-sm">
              {timeline.slice(0, activeStep + 1).map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 whitespace-nowrap"
                >
                  ✔ {step.title} completed successfully...
                </motion.div>
              ))}

              {activeStep === timeline.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-green-300 leading-relaxed sm:mt-6 sm:p-4"
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
          className="mt-12 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 md:grid-cols-4"
        >
          <div className="rounded-2xl border border-border bg-surface-card p-4 text-center transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 sm:p-6">
            <h2 className="text-2xl font-black text-accent sm:text-3xl">142 ms</h2>
            <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">Response Time</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-4 text-center transition-all duration-300 hover:border-green-400/30 hover:-translate-y-1 sm:p-6">
            <h2 className="text-2xl font-black text-green-400 sm:text-3xl">99.98%</h2>
            <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">API Success</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-4 text-center transition-all duration-300 hover:border-purple-400/30 hover:-translate-y-1 sm:p-6">
            <h2 className="text-2xl font-black text-purple-400 sm:text-3xl">8</h2>
            <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">Backend Services</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-card p-4 text-center transition-all duration-300 hover:border-orange-400/30 hover:-translate-y-1 sm:p-6">
            <h2 className="text-2xl font-black text-orange-400 sm:text-3xl">2K+</h2>
            <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">Req / Sec</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
