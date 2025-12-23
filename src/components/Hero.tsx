import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bhargavi RAMANADANE
          </h1>
          <h2 className="hero-subtitle">
            Étudiante Ingénieure Software Engineering
          </h2>
          <p className="hero-tagline">
            "Transformer des idées en solutions digitales concrètes, un projet à la fois"
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-secondary">
              Me contacter
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <ArrowDown size={32} />
      </a>
    </section>
  )
}

export default Hero