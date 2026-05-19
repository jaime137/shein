export default function Card({ title, text, image, button }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="btn secondary" href="https://YOUR-AFFILIATE-LINK.com">{button}</a>
      </div>
    </article>
  )
}