import Header from "./components/Header";
import Hero from "./components/Hero";
import EngineeringIdentity from "./components/EngineeringIdentity";

import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CheckoutHero from "./components/checkout/CheckoutHero";
import ArchitectureDiagram from "./components/checkout/ArchitectureDiagram";
import Timeline from "./components/checkout/Timeline";
import EngineeringChallenges from "./components/EngineeringChallenges";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Engineering Identity */}
        <EngineeringIdentity />

        {/* Production Checkout System Showcase */}
        <CheckoutHero />
        <ArchitectureDiagram />
        <Timeline />
        <EngineeringChallenges />

        {/* Skills */}
        <Skills />
        <Project />
        <Experience />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
