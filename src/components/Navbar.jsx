import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">GlowMode</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/outfits">Outfits</Link>
        <Link to="/trends">Tendencias</Link>
        <Link to="/sobre-nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}