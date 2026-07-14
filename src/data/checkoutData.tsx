export interface ServiceData {
  id: string;
  title: string;
  purpose: string;
  features: string[];
  techStack: string[];
  endpoints: string[];
  security: string[];
  performance: {
    latency: string;
    availability: string;
    throughput: string;
  };
}

export const checkoutData: Record<string, ServiceData> = {
  payment: {
    id: "payment",
    title: "Payment Service",

    purpose:
      "Securely process customer payments using Stripe while preventing duplicate transactions.",

    features: [
      "Stripe Integration",
      "Idempotency Protection",
      "Transaction Handling",
      "Fraud Detection",
      "Refund Support",
    ],

    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API"],

    endpoints: [
      "POST /payments/create-intent",
      "POST /payments/confirm",
      "POST /payments/refund",
      "GET /payments/:id",
    ],

    security: [
      "JWT Authentication",
      "HTTPS Encryption",
      "Rate Limiting",
      "Webhook Verification",
    ],

    performance: {
      latency: "120 ms",
      availability: "99.99%",
      throughput: "2,000 req/sec",
    },
  },

  cart: {
    id: "cart",
    title: "Cart Service",

    purpose:
      "Manage customer shopping carts with real-time updates and fast retrieval.",

    features: [
      "Add/Remove Items",
      "Quantity Management",
      "Cart Persistence",
      "Price Calculation",
    ],

    techStack: ["Node.js", "Express", "Redis", "MongoDB"],

    endpoints: [
      "POST /cart/add",
      "DELETE /cart/remove",
      "GET /cart/:userId",
      "PUT /cart/update",
    ],

    security: ["JWT Authentication", "Input Validation", "Session Protection"],

    performance: {
      latency: "80 ms",
      availability: "99.95%",
      throughput: "5,000 req/sec",
    },
  },
};
