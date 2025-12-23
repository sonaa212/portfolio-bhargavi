import { Code, Smartphone, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Langages",
      skills: ["Python", "Java", "C/C++", "PHP", "JavaScript", "TypeScript"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile",
      skills: ["Kotlin", "React Native", "Android Studio", "Firebase"]
    },
    {
      icon: <Code size={32} />,
      title: "Web",
      skills: ["Django", "Angular", "React", "HTML/CSS", "Bootstrap"]
    },
    {
      icon: <Database size={32} />,
      title: "Bases de données",
      skills: ["MySQL", "PostgreSQL", "Firebase Firestore"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Outils",
      skills: ["Git", "GitLab", "Jira", "Figma", "VS Code"]
    }
  ]

  const softSkills = [
    {
      title: "Adaptabilité",
      description: "Expérience avec diverses technologies et contextes internationaux (Amsterdam, France, Inde)"
    },
    {
      title: "Esprit d'équipe",
      description: "Collaboration efficace en méthodologie Agile sur plusieurs projets"
    },
    {
      title: "Rigueur",
      description: "Précision et attention aux détails dans la gestion de projets techniques complexes"
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        
        <h3 className="subsection-title">Compétences Techniques</h3>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">{category.icon}</div>
              <h4>{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Soft Skills</h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-card">
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills