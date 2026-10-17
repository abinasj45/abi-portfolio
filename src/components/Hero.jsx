import { CODE_LINES } from '../data'

const Split = ({ t }) => (
  <span className="w">{[...t].map((x, i) => <span className="ch" key={i}>{x}</span>)}</span>
)

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="badge"><span />Open to developer roles</div>
      <h1><Split t="Abinas" /></h1>
      <p className="hero-sub">
        Full-stack developer in the making. I build with Core Java, SQL, MySQL and React.js, and care about clean structure and interfaces that feel alive. Chennai, India.
      </p>
      <div className="hero-cta">
        <a className="btn p" href="#contact">Get in touch</a>
        <a className="btn" href="#experience">See experience</a>
      </div>
      <div className="code">
        <div className="dots"><b /><b /><b /></div>
        {CODE_LINES.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
      </div>
    </section>
  )
}
