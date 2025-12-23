import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "MSafe - Prise Connectée",
      period: "Juillet - Septembre 2025",
      company: "MSafe, Amsterdam",
      description: "Application Android en Kotlin pour le pilotage à distance d'une prise connectée avec communication Bluetooth ESP32.",
      technologies: ["Kotlin", "Android Studio", "Bluetooth", "Arduino ESP32"],
      achievements: [
        "Communication Bluetooth fonctionnelle avec module ESP32",
        "Récupération en temps réel des données des capteurs",
        "Règles automatiques d'activation/désactivation",
        "Pilotage du processus Agile"
      ],
      image: "/project-msafe.png" // Tu ajouteras l'image plus tard
    },
    {
      title: "Application Mobile de Sécurité",
      period: "En cours",
      company: "CAP Projet - ESIEA",
      description: "Application mobile de sécurité pour les usagers de mobilités douces (cyclistes, trottinettes, etc.).",
      technologies: ["React Native", "JavaScript", "Leaflet", "OSRM", "Jira"],
      achievements: [
        "Cartographie interactive avec Leaflet",
        "Système de géolocalisation SOS",
        "Détection et signalement d'incidents",
        "Collaboration en équipe Agile (Scrum)"
      ],
      image: "/project-cap.png"
    },
    {
      title: "Application Mobile de Recettes",
      period: "Projet académique",
      company: "ESIEA",
      description: "Application de recherche de recettes avec gestion des favoris et planning de repas.",
      technologies: ["Kotlin", "Android Studio", "Firebase", "Spoonacular API"],
      achievements: [
        "Intégration de l'API Spoonacular",
        "Système de favoris avec Firebase",
        "Gestion du planning repas",
        "Authentification utilisateur (Firebase Auth)"
      ],
      image: "/project-recipe.png"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-company">{project.company}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-achievements">
                  <h4>Réalisations :</h4>
                  <ul>
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects