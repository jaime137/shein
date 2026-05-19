import Card from '../components/Card'

export default function Outfits() {
  const outfits = [
    {
      title: 'Look beige minimalista',
      text: 'Perfecto para brunch, oficina o escapadas urbanas.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      button: 'Ver Outfit'
    },
    {
      title: 'Streetwear aesthetic',
      text: 'Sudaderas oversized y accesorios virales inspirados en TikTok.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      button: 'Comprar en SHEIN'
    }
  ]

  return (
    <main className="page">
      <h1>Outfits</h1>
      <div className="grid">
        {outfits.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </main>
  )
}