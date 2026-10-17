import { LINKS } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="cta">
      <p style={{ color: 'var(--acc)', letterSpacing: '.2em', textTransform: 'uppercase', fontSize: '.85rem' }}>06 — Contact</p>
      <h2>Let’s work<br />together — <a href="mailto:abinas.j33@gmail.com">say hi</a></h2>
      <div className="links">
        {LINKS.map(([t, u]) => (
          <a key={t} className="btn" href={u} target="_blank" rel="noopener noreferrer">{t}</a>
        ))}
      </div>
    </section>
  )
}
