import useAnimations from './useAnimations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  useAnimations()
  return (
    <>
      <div className="bar" />
      <div className="glow" />
      <div className="orb" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <footer>© 2026 Abinas J · Built with React & GSAP</footer>
    </>
  )
}
