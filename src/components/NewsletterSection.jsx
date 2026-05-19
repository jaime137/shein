export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <h2>Únete a la newsletter fashion</h2>
      <p>Recibe tendencias virales, outfits minimalistas y recomendaciones semanales.</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Tu email" />
        <button>Suscribirme</button>
      </div>
    </section>
  )
}