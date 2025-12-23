const Experience = () => {
  const experiences = [
    {
      title: "Développeuse Mobile",
      company: "MSafe",
      location: "Amsterdam, Pays-Bas",
      period: "Juillet - Septembre 2025",
      type: "Job d'été",
      description: "Développement d'une application Android pour le pilotage d'une prise connectée avec communication Bluetooth ESP32.",
      tasks: [
        "Conception et développement d'une application Android en Kotlin",
        "Implémentation de la communication Bluetooth avec module ESP32",
        "Intégration des capteurs et règles automatiques",
        "Pilotage du processus Agile"
      ]
    },
    {
      title: "Stagiaire - Développeuse Web",
      company: "Ressource'Brie",
      location: "Brie-Comte-Robert, France",
      period: "Janvier - Mars 2023",
      type: "Stage",
      description: "Développement de fonctionnalités web pour le site de l'association.",
      tasks: [
        "Implémentation d'un système de réinitialisation de mot de passe (PHP/MySQL)",
        "Création d'une page 'Comptabilité' affichant le bilan des heures de bénévolat",
        "Amélioration du menu principal et de la navigation (HTML/CSS/Bootstrap)"
      ]
    },
    {
      title: "Stagiaire - Testeuse Web",
      company: "Manureva Digital Solutions",
      location: "Pondichéry, Inde",
      period: "Juillet 2021",
      type: "Stage",
      description: "Tests et suivi de bugs sur un site de rencontre développé par l'entreprise.",
      tasks: [
        "Détection et suivi des bugs",
        "Gestion des tickets et suivi de projet via Jira"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Expériences Professionnelles</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3>{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">
                <strong>{exp.company}</strong> - {exp.location}
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-tasks">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience