import SectionTitle from './SectionTitle'
import { STATS } from '../data'

export default function About() {
  return (
    <section id="about">
      <SectionTitle k="01 — About" t="Clean code, lively interfaces" />
      <div className="about">
        <p className="rv">
          I’m a developer with a foundation in Core Java, MySQL and React.js, backed by certifications and a full-stack project. I like tidy schemas, reusable components and interfaces with a bit of motion. Detail-oriented, a quick learner and a good teammate.
        </p>
        <div className="stats">
          {STATS.map(([v, label]) => (
            <div className="stat rv" key={label}>
              <div className="num" data-v={v}>0</div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
