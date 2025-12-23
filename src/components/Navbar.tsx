import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'Accueil', href: '#hero' },
    { title: 'À propos', href: '#about' },
    { title: 'Projets', href: '#projects' },
    { title: 'Compétences', href: '#skills' },
    { title: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Bhargavi RAMANADANE</h2>
        </div>

        {/* Menu Desktop */}
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Bouton Mobile */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="navbar-mobile">
          {menuItems.map((item) => (
            <a 
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar