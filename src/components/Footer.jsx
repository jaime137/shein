import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <p>Esta web puede contener enlaces de afiliado. Podemos recibir una comisión sin coste extra para ti.</p>
      <div className="footer-links">
        <Link to="/privacidad">Privacidad</Link>
        <Link to="/aviso-legal">Aviso Legal</Link>
        <Link to="/afiliados">Afiliados</Link>
      </div>
      <p>© 2026 GlowMode Magazine</p>
    </footer>
  )
}