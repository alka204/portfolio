import { motion } from "framer-motion";
import type { ServiceData } from "../../data/checkoutData";

interface Props {
  service: ServiceData | null;
}

const ServiceDetails = ({ service }: Props) => {
  if (!service) {
    return (
      <div className="p-6 text-gray-400 text-center">
        Select a service to view details
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>

        <p className="mt-2 text-gray-600 leading-relaxed">{service.purpose}</p>
      </div>

      {/* Features */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">FEATURES</h3>

        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">TECH STACK</h3>

        <div className="flex flex-wrap gap-2">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* API Endpoints */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">API ENDPOINTS</h3>

        <div className="space-y-2">
          {service.endpoints.map((endpoint) => (
            <div
              key={endpoint}
              className="font-mono text-sm bg-gray-50 p-2 rounded"
            >
              {endpoint}
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">SECURITY</h3>

        <ul className="space-y-2">
          {service.security.map((item) => (
            <li key={item} className="text-gray-700">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Performance */}
      <section>
        <h3 className="font-semibold text-gray-900 mb-3">PERFORMANCE</h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-500">Latency</p>
            <p className="font-bold">{service.performance.latency}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-500">Availability</p>
            <p className="font-bold">{service.performance.availability}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-500">Throughput</p>
            <p className="font-bold">{service.performance.throughput}</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetails;
