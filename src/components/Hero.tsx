import React from 'react'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import AbstractArt from './ui/AbstractArt'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg)] ctx-grid">
      <div className="absolute inset-0 z-0 hero-abstract" aria-hidden />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AbstractArt className="w-full h-full object-cover" variant="bold" />
      </div>
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6 py-28 flex flex-col items-start gap-6 lg:py-36">
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">BUILT SYSTEMS</p>
          <h1 className="font-mono text-6xl md:text-8xl leading-tight text-[var(--accent-green)] max-w-4xl">CTX.ENG /&gt;</h1>
          <p className="max-w-4xl text-[var(--muted)] text-base">Design systems that actually ship. Learn to architect creative systems, optimize token usage, and design projects that scale in production.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/contact">Enroll</Button>
            <Button variant="ghost" to="/work">Modules</Button>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-6xl px-6">
          <div className="w-full h-36 border border-[var(--accent-dim)] rounded-sm"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
