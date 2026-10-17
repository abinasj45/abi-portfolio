import SectionTitle from './SectionTitle'
import { EDUCATION, CERTS } from '../data'

export default function Education() {
  return (
    <section id="education">
      <SectionTitle k="05 — Education" t="Foundations" />
      {EDUCATION.map(([degree, school, when]) => (
        <div className="edu" key={degree}>
          <div><b>{degree}</b><p>{school}</p></div>
          <span>{when}</span>
        </div>
      ))}
      <div className="chips rv" style={{ marginTop: 28 }}>
        {CERTS.map((x) => <span key={x}>✓ {x}</span>)}
      </div>
    </section>
  )
}
