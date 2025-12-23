import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import ServicesStrip from '../components/ui/ServicesStrip';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import TestimonialBlock from '../components/ui/TestimonialBlock';
import ProjectGrid from '../components/ui/ProjectGrid';
import { allProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';
import { useReveal } from '../hooks/useReveal';
import JsonLdOrganization from '../components/JsonLdOrganization';
import TextLink from '../components/ui/TextLink';
import Hero from '../components/Hero';

const Home = () => {
  usePageMeta({
    title: 'nuViz Studio | Photography, Film, Music Videos, Design',
    description: 'nuViz is a creative studio crafting premium photography, film, music videos, and design with rhythm.'
  });

  return (
    <div>
      <JsonLdOrganization
        name="nuViz Studio"
        url="https://www.nuviz.studio"
        description="Creative studio for photography, film, music videos, and design."
        location="Brooklyn, NY"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[var(--bg)] ctx-grid">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28 lg:py-36">
          <header className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm" data-prefix="//">Creative Studio</p>
            <h1 className="font-mono text-[5.25rem] leading-tight text-[var(--accent-green)] lg:text-[6.5rem]">nuViz</h1>
            <p className="mt-4 text-lg text-[var(--text)] max-w-2xl code-prefix block" data-prefix=">">We make visuals that move people.</p>
            <p className="mt-2 text-sm text-[var(--muted)] max-w-2xl">Photography, film, and design with editorial intention.</p>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/contact" className="shadow-soft">Book a shoot</Button>
              <Button variant="ghost" to="/work">View work</Button>
            </div>
          </header>
        </div>
      </section>

      {/* Belief */}
      <section className="mx-auto max-w-4xl px-6 lg:py-16 py-12">
        <div className="prose prose-invert text-[var(--muted)]">
          <p className="font-mono text-sm uppercase tracking-wider">Our belief</p>
          <h2 className="font-mono text-3xl text-[var(--text)]">We favour the right frame over many options.</h2>
          <p>We believe in restraint. In light, in rhythm, in the pause between frames.</p>
          <p>We shape work that reads on stage, in print, and on film. A clear idea, executed precisely.</p>
        </div>
      </section>

      {/* Services (typographic flow) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Services</p>
            <h3 className="font-mono text-2xl text-[var(--text)]">What we do</h3>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">01</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Photography</div>
                <div className="text-[var(--muted)] mt-1">Portraits and campaigns that feel inevitable.</div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">02</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Filmmaking</div>
                <div className="text-[var(--muted)] mt-1">Tactile, paced films that respect sound and silence.</div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">03</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Music Videos</div>
                <div className="text-[var(--muted)] mt-1">Performance-led visuals with cinematic cut.</div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">04</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Design</div>
                <div className="text-[var(--muted)] mt-1">Identity and packaging that sit calmly in bold contexts.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Approach */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ProjectGrid projects={allProjects.slice(0, 6)} />
          </div>
          <aside className="lg:col-span-5 pt-6">
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">Approach</p>
            <h3 className="font-mono text-2xl text-[var(--text)]">We make scenes, not slides.</h3>
            <p className="text-[var(--muted)] mt-3">Listen. Plan. Light. Direct. Refine. We craft a single strong idea and carry it through production.</p>
          </aside>
        </div>
      </section>

      {/* Credibility */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Credibility</p>
            <h4 className="font-mono text-lg text-[var(--text)]">Trusted by editors, labels, and studios</h4>
          </div>
          <div className="flex gap-6 items-center text-[var(--muted)] text-sm">
            <span>Publication A</span>
            <span>Label B</span>
            <span>Studio C</span>
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-[var(--accent-dim)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-mono text-xl text-[var(--text)]">Start with a note and a reference track.</h4>
            <p className="text-[var(--muted)] mt-2">We reply within one business day with a direction and timeline.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/contact">Begin a project</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
