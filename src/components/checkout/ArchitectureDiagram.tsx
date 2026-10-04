import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Server,
  ShoppingCart,
  CreditCard,
  Package,
  ClipboardList,
  Database,
  BellRing,
  Play,
} from "lucide-react";

import ServiceNode from "./ServiceNode";
import ConnectionLine from "./ConnectionLine";
import ServiceDetails from "./ServiceDetails";
import { checkoutData } from "../../data/checkoutData";

type NodeId =
  | "user"
  | "gateway"
  | "cart"
  | "payment"
  | "inventory"
  | "order"
  | "database"
  | "events";

interface ServiceItem {
  id: NodeId;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    id: "user",
    title: "User",
    subtitle: "Customer Browser",
    color: "#00BCD4",
    icon: User,
  },
  {
    id: "gateway",
    title: "API Gateway",
    subtitle: "Routing & Authentication",
    color: "#00BCD4",
    icon: Server,
  },
  {
    id: "cart",
    title: "Cart Service",
    subtitle: "Shopping Cart",
    color: "#00BCD4",
    icon: ShoppingCart,
  },
  {
    id: "payment",
    title: "Payment Service",
    subtitle: "Stripe / Razorpay",
    color: "#00BCD4",
    icon: CreditCard,
  },
  {
    id: "inventory",
    title: "Inventory",
    subtitle: "Stock Validation",
    color: "#00BCD4",
    icon: Package,
  },
  {
    id: "order",
    title: "Order Service",
    subtitle: "Order Creation",
    color: "#00BCD4",
    icon: ClipboardList,
  },
  {
    id: "database",
    title: "PostgreSQL",
    subtitle: "Persistent Storage",
    color: "#00BCD4",
    icon: Database,
  },
  {
    id: "events",
    title: "Event Queue",
    subtitle: "Notifications",
    color: "#00BCD4",
    icon: BellRing,
  },
];

const sequence: NodeId[] = [
  "user",
  "gateway",
  "cart",
  "inventory",
  "payment",
  "order",
  "database",
  "events",
];

const ArchitectureDiagram = () => {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  const serviceMap = useMemo(() => {
    return Object.fromEntries(
      services.map((service) => [service.id, service]),
    ) as Record<NodeId, ServiceItem>;
  }, []);
  const selectedDetails = selected ? checkoutData[selected.id] : null;

  const runSimulation = () => {
    if (running) return;

    setRunning(true);

    sequence.forEach((step, index) => {
      setTimeout(() => {
        setActiveNode(step);
      }, index * 900);
    });

    setTimeout(
      () => {
        setActiveNode(null);
        setRunning(false);
      },
      sequence.length * 900 + 500,
    );
  };

  useEffect(() => {
    setSelected(serviceMap.user);
  }, [serviceMap]);

  return (
    <section
      id="simulation"
      className="border-t border-border bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-border bg-surface-card px-3.5 py-1.5 text-xs font-semibold text-accent sm:px-4 sm:py-2 sm:text-sm">
            Interactive Architecture
          </span>

          <h2 className="mt-4 text-2xl font-black text-white sm:mt-6 sm:text-4xl md:text-5xl">
            Production Checkout Flow
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            Watch how a production ecommerce checkout request moves through
            multiple backend services before completing an order.
          </p>

          <button
            onClick={runSimulation}
            disabled={running}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-accent-hover disabled:opacity-50 sm:mt-10 sm:px-7 sm:py-4 sm:text-base"
          >
            <Play size={18} />

            {running ? "Simulation Running..." : "Run Simulation"}
          </button>
        </motion.div>

        {/* Information Panel */}

        <motion.div
          key={selected?.id}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="mx-auto mt-10 max-w-5xl sm:mt-16"
        >
          <ServiceDetails service={selectedDetails} />
        </motion.div>

        {/* Architecture */}

        <div className="mt-12 flex flex-col items-center sm:mt-16">
          <ServiceNode
            {...serviceMap.user}
            active={activeNode === "user"}
            onClick={() => setSelected(serviceMap.user)}
          />

          <ConnectionLine active={activeNode === "gateway"} />

          <ServiceNode
            {...serviceMap.gateway}
            active={activeNode === "gateway"}
            onClick={() => setSelected(serviceMap.gateway)}
          />

          <ConnectionLine active={activeNode === "cart"} />

          {/* Three parallel services */}

          <div className="mt-6 grid w-full max-w-5xl justify-items-center gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            <ServiceNode
              {...serviceMap.cart}
              active={activeNode === "cart"}
              onClick={() => setSelected(serviceMap.cart)}
            />

            <ServiceNode
              {...serviceMap.payment}
              active={activeNode === "payment"}
              onClick={() => setSelected(serviceMap.payment)}
            />

            <ServiceNode
              {...serviceMap.inventory}
              active={activeNode === "inventory"}
              onClick={() => setSelected(serviceMap.inventory)}
            />
          </div>
          <div className="my-6 flex justify-center sm:my-8">
            <ConnectionLine active={activeNode === "order"} />
          </div>

          <ServiceNode
            {...serviceMap.order}
            active={activeNode === "order"}
            onClick={() => setSelected(serviceMap.order)}
          />

          <div className="my-6 flex justify-center sm:my-8">
            <ConnectionLine active={activeNode === "database"} />
          </div>

          <ServiceNode
            {...serviceMap.database}
            active={activeNode === "database"}
            onClick={() => setSelected(serviceMap.database)}
          />

          <div className="my-6 flex justify-center sm:my-8">
            <ConnectionLine active={activeNode === "events"} />
          </div>

          <ServiceNode
            {...serviceMap.events}
            active={activeNode === "events"}
            onClick={() => setSelected(serviceMap.events)}
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
