import { motion } from "framer-motion";
import type { ServiceData } from "../../data/checkoutData";

interface Props {
  service: ServiceData | null;
}

const ServiceDetails = ({ service }: Props) => {
  if (!service) {
    return (
      <div className="p-6 text-center text-muted">
        Select a service to view details
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-5 sm:p-8"
    >
      {/* Header */}
      <div className="mb-6 border-b border-border pb-6">
        <h2 className="text-xl font-bold text-white sm:text-2xl">{service.title}</h2>

        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{service.purpose}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Features */}
        <section>
          <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            FEATURES
          </h3>

          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-white/90 sm:text-sm">
                <span className="mt-0.5 text-accent">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            TECH STACK
          </h3>

          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* API Endpoints */}
      <section className="mt-6">
        <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          API ENDPOINTS
        </h3>

        <div className="space-y-2">
          {service.endpoints.map((endpoint) => (
            <div
              key={endpoint}
              className="break-all font-mono text-xs text-accent bg-surface-raised/90 border border-border p-2.5 rounded-lg"
            >
              {endpoint}
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="mt-6">
        <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          SECURITY
        </h3>

        <ul className="space-y-2">
          {service.security.map((item) => (
            <li key={item} className="text-xs text-muted sm:text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Performance */}
      <section className="mt-6">
        <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          PERFORMANCE
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <div className="rounded-xl border border-border bg-surface-raised p-3 text-center">
            <p className="text-xs text-muted">Latency</p>
            <p className="mt-1 font-bold text-white sm:text-lg">{service.performance.latency}</p>
          </div>

          <div className="rounded-xl border border-border bg-surface-raised p-3 text-center">
            <p className="text-xs text-muted">Availability</p>
            <p className="mt-1 font-bold text-emerald-400 sm:text-lg">{service.performance.availability}</p>
          </div>

          <div className="rounded-xl border border-border bg-surface-raised p-3 text-center">
            <p className="text-xs text-muted">Throughput</p>
            <p className="mt-1 font-bold text-accent sm:text-lg">{service.performance.throughput}</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetails;
