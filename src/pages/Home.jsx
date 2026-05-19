import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import NewsletterSection from '../components/NewsletterSection'

const cards = [
  {
    title: 'Outfits aesthetic para primavera',
    text: 'Looks cómodos y minimalistas inspirados en Pinterest y TikTok.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    button: 'Ver Outfit'
  },
  {
    title: 'Top prendas virales del mes',
    text: 'Las piezas más guardadas en redes sociales esta semana.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    button: 'Comprar en SHEIN'
  },
  {
    title: 'Looks effortless para diario',
    text: 'Moda casual premium con básicos fáciles de combinar.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    button: 'Descubrir'
  }
]

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="section">
        <h2>Tendencias destacadas</h2>
        <div className="grid">
          {cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
      </section>
      <NewsletterSection />
    </main>
  )
}