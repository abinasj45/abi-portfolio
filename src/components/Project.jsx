import SectionTitle from './SectionTitle'
import { PROJECT as P } from '../data'

export default function Project() {
  return (
    <section id="project">
      <SectionTitle k="04 — Project" t="Selected build" />
      <div className="proj rv">
        <div>
          <div className="badge">{P.tag}</div>
          <h3>{P.title}</h3>
          <p>{P.blurb}</p>
          <ul style={{ marginTop: 14 }}>{P.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="seats">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className={`seat${P.takenSeats.includes(i) ? ' t' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
