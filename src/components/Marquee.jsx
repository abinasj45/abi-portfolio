import { TICK } from '../data'

export default function Marquee() {
  return (
    <div className="mq">
      <div className="mq-in">
        {[0, 1].map((k) => TICK.map((t, i) => <span key={`${k}-${i}`}>{t} <em>✦</em></span>))}
      </div>
    </div>
  )
}
