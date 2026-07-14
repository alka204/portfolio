export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  type: "github" | "live";
}

export const personalProjects: Project[] = [
  {
    title: "Production Checkout System",
    description:
      "An interactive backend engineering showcase demonstrating a production-grade ecommerce checkout architecture with API Gateway, payment processing, PostgreSQL, JWT authentication, event-driven services, database transactions, and cloud deployment concepts.",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe"],
    link: "#checkout",
    linkLabel: "Explore Architecture",
    type: "live",
  },
  {
    title: "PulseOS",
    description:
      "A full-stack health monitoring platform with a React login dashboard on Vercel and a Node.js API backend on Render for user authentication and data management.",
    tags: ["React", "Node.js", "REST API", "Full Stack"],
    link: "https://pulse-os-six.vercel.app/login",
    linkLabel: "Visit Frontend",
    secondaryLink: "https://pulseos-backend-zmsf.onrender.com/",
    secondaryLinkLabel: "View Backend",
    type: "live",
  },
  {
    title: "SliceSpot",
    description:
      "A full-stack food ordering platform — React frontend for browsing menus and placing orders, with a Node.js REST API backend deployed on Render for order management and health monitoring.",
    tags: ["React", "Node.js", "REST API", "Full Stack"],
    link: "https://slicespot-seven.vercel.app/",
    linkLabel: "Visit Frontend",
    secondaryLink: "https://slicespot-backend.onrender.com/api/health",
    secondaryLinkLabel: "View API",
    type: "live",
  },
  {
    title: "Ride-Connect",
    description:
      "A carpooling web app using React and Firebase, enabling users to share rides efficiently with real-time coordination.",
    tags: ["React", "Firebase", "Full Stack"],
    link: "https://github.com/alka204/Ride-Connect-",
    linkLabel: "View on GitHub",
    type: "github",
  },
  {
    title: "Healthub",
    description:
      "A responsive health tracking website built using HTML, CSS, and JavaScript with a clean dashboard for wellness metrics.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/alka204/Healthhub",
    linkLabel: "View on GitHub",
    type: "github",
  },
  {
    title: "Sydney Events",
    description:
      "A full-stack web app that displays and manages Sydney events on a dynamic dashboard with live status indicators.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/alka204/sydney-events",
    linkLabel: "View on GitHub",
    type: "github",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack web app to create, view, update, and delete tasks with a responsive UI and persistent database storage.",
    tags: ["Express", "MongoDB", "REST API"],
    link: "https://github.com/alka204/Task-manager",
    linkLabel: "View on GitHub",
    type: "github",
  },

  {
    title: "Skin App",
    description:
      "A web application that provides skincare product recommendations and tips based on user preferences with a responsive interface.",
    tags: ["React", "UI/UX", "Responsive"],
    link: "https://github.com/alka204/skin_app",
    linkLabel: "View on GitHub",
    type: "github",
  },
];

export const freelanceProjects: Project[] = [
  {
    title: "Swapnashilp Developers",
    description:
      "Designed the complete UI layout in Google Stitch for this Nagpur real estate brand, then built the responsive site using Cursor and Google Antigravity — project showcases, amenities, and lead capture flows.",
    tags: ["Google Stitch", "Cursor", "Antigravity", "UI Design"],
    link: "https://bisque-cobra-537805.hostingersite.com/",
    linkLabel: "Visit Website",
    type: "live",
  },
  {
    title: "Pushpa Smart Windows",
    description:
      "Crafted the visual structure and component system in Google Stitch, then developed the production site with AI-assisted tooling (Cursor & Antigravity) — product catalog, project gallery, and quote forms.",
    tags: ["Google Stitch", "Cursor", "Antigravity", "Web Dev"],
    link: "https://pushpasmartwindows.com/",
    linkLabel: "Visit Website",
    type: "live",
  },
  {
    title: "247 Digital Pro",
    description:
      "End-to-end marketing agency website — UI designed in Google Stitch, built with Sanity CMS, Cursor, and Antigravity. Includes services, portfolio, blog, and contact sections with a polished business layout.",
    tags: ["Sanity", "Google Stitch", "Cursor", "Next.js"],
    link: "https://247-sanity.vercel.app/",
    linkLabel: "Visit Website",
    type: "live",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
