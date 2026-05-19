import Card from '../components/Card'

const posts = [
  {
    title: 'Cómo crear un armario cápsula aesthetic',
    text: 'Aprende a combinar básicos minimalistas con prendas virales.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    button: 'Leer artículo'
  },
  {
    title: 'Moda clean girl: guía definitiva',
    text: 'Todo sobre la tendencia clean aesthetic y sus prendas clave.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    button: 'Leer artículo'
  }
]

export default function Blog() {
  return (
    <main className="page">
      <h1>Blog de Moda</h1>
      <div className="grid">
        {posts.map((post, i) => <Card key={i} {...post} />)}
      </div>
    </main>
  )
}