import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-text">
            <h3>L'ingénieure que je souhaite devenir</h3>
            <p>
              Je souhaite devenir une ingénieure fullstack capable de concevoir des 
              solutions digitales qui répondent aux besoins réels des utilisateurs. 
              Mon objectif est de continuer à développer mes compétences en développement 
              mobile et web, tout en approfondissant ma maîtrise des architectures 
              logicielles modernes.
            </p>
            <p>
              Je veux contribuer à des projets qui ont un impact positif sur le quotidien 
              des gens, comme les applications de sécurité ou les outils d'accessibilité.
            </p>
          </div>
          
          <div className="contact-info">
            <h3>Me contacter</h3>
            <div className="contact-items">
              <a href="mailto:ramanadane@et.esiea.fr" className="contact-item">
                <Mail size={24} />
                <span>ramanadane@et.esiea.fr</span>
              </a>
              <a href="tel:+33752393045" className="contact-item">
                <Phone size={24} />
                <span>+33 7 52 39 30 45</span>
              </a>
              <div className="contact-item">
                <MapPin size={24} />
                <span>Maurepas, 78310, France</span>
              </div>
              <a href="https://www.linkedin.com/in/bhargavi-ramanadane/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-tags">
            <span>Angular - OpenClassrooms</span>
            <span>Cybersécurité - ANSSI</span>
            <span>PIX</span>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2025 Bhargavi RAMANADANE - Portfolio</p>
      </footer>
    </section>
  )
}

export default Contact