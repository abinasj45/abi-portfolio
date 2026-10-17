import { NAV } from '../data'

export default function Nav() {
  return (
    <nav>
      <b>ABINAS<i>.J</i></b>
      <div>{NAV.map((s) => <a key={s} href={`#${s}`}>{s}</a>)}</div>
    </nav>
  )
}
