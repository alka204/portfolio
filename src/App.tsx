import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectGrid from './components/ProjectGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { personalProjects, freelanceProjects } from './data/projects'

const VantaBackground = lazy(() => import('./components/VantaBackground'))

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <VantaBackground />
      </Suspense>
      <Header />
      <main>
        <Hero />
        <Skills />
        <ProjectGrid
          id="projects"
          label="Portfolio"
          title="My Projects"
          description="Personal and academic projects — full-stack apps, dashboards, and responsive web experiences."
          projects={personalProjects}
        />
        <ProjectGrid
          id="freelance"
          label="Freelancing / Volunteer"
          title="Client & Volunteer Work"
          description="Real-world websites where I handled UI design in Google Stitch and development using AI-assisted tools like Cursor and Google Antigravity."
          projects={freelanceProjects}
        />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
