import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimations() {
  useEffect(() => {
    const glow = document.querySelector('.glow')
    const onMove = (e) => gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.8, ease: 'power3.out' })
    window.addEventListener('mousemove', onMove)
    const cleanups = [() => window.removeEventListener('mousemove', onMove)]

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const ctx = gsap.context(() => {
        gsap.from('.ch', { yPercent: 115, rotate: 8, opacity: 0, stagger: 0.035, duration: 1, ease: 'power4.out', delay: 0.2 })
        gsap.from('.hero .badge,.hero-sub,.hero-cta>*', { y: 30, opacity: 0, stagger: 0.12, delay: 0.9, duration: 0.8, ease: 'power3.out' })
        gsap.from('.code', { x: 80, opacity: 0, duration: 1.1, delay: 1, ease: 'power3.out' })
        gsap.from('.code span', { opacity: 0, x: -12, stagger: 0.15, delay: 1.3 })
        gsap.to('.code', { y: -14, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 2.2 })
        gsap.to('.mq-in', { xPercent: -50, duration: 26, ease: 'none', repeat: -1 })
        gsap.to('.bar', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: 0.3, start: 0, end: 'max' } })
        gsap.to('.orb', { yPercent: -45, ease: 'none', scrollTrigger: { trigger: document.body, scrub: 1, start: 'top top', end: 'bottom bottom' } })
        gsap.to('.hero h1', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: true, start: 'top top', end: 'bottom top' } })
        gsap.utils.toArray('.rv').forEach((el) => gsap.from(el, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }))
        gsap.utils.toArray('.rv-t').forEach((el) => gsap.from(el, { yPercent: 100, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 92%' } }))
        gsap.utils.toArray('.job').forEach((el) => gsap.from(el, { x: -40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }))
        gsap.to('.tl-line', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.tl', start: 'top 70%', end: 'bottom 70%', scrub: true } })
        gsap.utils.toArray('.num').forEach((n) => {
          const o = { v: 0 }
          gsap.to(o, { v: +n.dataset.v, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: n, start: 'top 92%' }, onUpdate: () => { n.textContent = Math.round(o.v) } })
        })
        gsap.from('.seat', { scale: 0, stagger: { each: 0.03, from: 'random' }, duration: 0.5, ease: 'back.out(2)', scrollTrigger: { trigger: '.seats', start: 'top 85%' } })
        gsap.to('.seat.t', { opacity: 0.35, repeat: -1, yoyo: true, duration: 1.2, stagger: { each: 0.25, from: 'random' }, ease: 'sine.inOut' })
        gsap.from('.edu', { opacity: 0, y: 30, stagger: 0.15, scrollTrigger: { trigger: '.edu', start: 'top 90%' } })
        gsap.from('.cta h2', { scale: 0.85, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.cta', start: 'top 75%' } })
      })
      cleanups.push(() => ctx.revert())

      document.querySelectorAll('.card,.stat').forEach((c) => {
        const mv = (e) => {
          const r = c.getBoundingClientRect()
          gsap.to(c, { rotationY: ((e.clientX - r.left) / r.width - 0.5) * 10, rotationX: -((e.clientY - r.top) / r.height - 0.5) * 10, transformPerspective: 800, duration: 0.4 })
        }
        const lv = () => gsap.to(c, { rotationX: 0, rotationY: 0, duration: 0.6, ease: 'power3.out' })
        c.addEventListener('mousemove', mv); c.addEventListener('mouseleave', lv)
        cleanups.push(() => { c.removeEventListener('mousemove', mv); c.removeEventListener('mouseleave', lv) })
      })
      document.querySelectorAll('.btn').forEach((b) => {
        const mv = (e) => {
          const r = b.getBoundingClientRect()
          gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.3 })
        }
        const lv = () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' })
        b.addEventListener('mousemove', mv); b.addEventListener('mouseleave', lv)
        cleanups.push(() => { b.removeEventListener('mousemove', mv); b.removeEventListener('mouseleave', lv) })
      })
    }
    return () => cleanups.forEach((f) => f())
  }, [])
}
