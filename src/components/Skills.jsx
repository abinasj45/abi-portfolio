import SectionTitle from './SectionTitle'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle k="02 — Skills" t="Toolbox" />
      <div className="grid">
        {SKILLS.map(([title, list]) => (
          <div className="card rv" key={title}>
            <h3>{title}</h3>
            <div className="chips">{list.map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
