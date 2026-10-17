import SectionTitle from './SectionTitle'
import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle k="03 — Experience" t="Experience" />
      <div className="tl">
        <div className="tl-line" />
        {EXPERIENCE.map(([org, role, meta, bullets]) => (
          <div className="job" key={org}>
            <h3>{role} — {org}</h3>
            <div className="m">{meta}</div>
            <ul>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
