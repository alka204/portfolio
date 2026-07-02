export interface SkillItem {
  name: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Interfaces that are fast, accessible, and responsive.',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3 / Bootstrap' },
      { name: 'JavaScript (ES6+)' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, databases, and server-side logic.',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'AI & Design Tools',
    description: 'Modern workflows for UI design and AI-assisted development.',
    skills: [
      { name: 'Cursor' },
      { name: 'Google Antigravity' },
      { name: 'Google Stitch' },
      { name: 'Claude' },
      { name: 'Sanity CMS' },
    ],
  },
  {
    title: 'Tools & Others',
    description: 'Version control, design, and deployment.',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Canva' },
      { name: 'VS Code' },
      { name: 'Netlify / Vercel' },
    ],
  },
]
