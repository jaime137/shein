import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Outfits from './pages/Outfits'
import Trends from './pages/Trends'
import Post from './pages/Post'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Legal from './pages/Legal'
import Affiliate from './pages/Affiliate'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/post" element={<Post />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/aviso-legal" element={<Legal />} />
        <Route path="/afiliados" element={<Affiliate />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App