const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Étudiante en 4ème année Software Engineering à l'ESIEA, passionnée par 
              le développement mobile et web, je transforme des besoins utilisateurs en 
              applications fonctionnelles.
            </p>
            <p>
              Mon expérience en Kotlin, React Native et PHP m'a permis de travailler 
              sur des projets concrets, de la prise connectée à la sécurité des 
              mobilités douces.
            </p>
            <p>
              Curieuse et rigoureuse, j'aime comprendre les systèmes et collaborer en 
              équipe Agile. Je recherche un stage de 4 à 6 mois à partir d'avril 2026 
              pour contribuer à des projets innovants en développement fullstack.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <h3>📍 Localisation</h3>
              <p>Maurepas, France</p>
            </div>
            <div className="info-item">
              <h3>🎓 Formation</h3>
              <p>ESIEA - 4ème année</p>
            </div>
            <div className="info-item">
              <h3>💼 Stage recherché</h3>
              <p>Avril 2026 - 4 à 6 mois</p>
            </div>
            <div className="info-item">
              <h3>🌍 Langues</h3>
              <p>Français, Anglais (TOEIC 890), Tamoul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About