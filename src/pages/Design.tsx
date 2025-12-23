import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { designProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Design = () => {
  usePageMeta({ title: 'Design | nuViz Studio', description: 'Identity, posters, and album artwork by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-0 pb-0">
        <div className="relative h-[320px] overflow-hidden rounded-none">
          <img
            src="https://assets.nuviz.studio/placeholders/design-hero.jpg"
            alt="Design hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-4">
              <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Design</p>
              <h1>Identity, print, and digital assets with a strong grid.</h1>
              <h2 className="font-serif text-2xl text-gray-100">Brand identity, posters, album artwork, and social systems.</h2>
              <p className="max-w-2xl text-gray-200">
                We build identities, posters, social toolkits, and album artwork with confident typography and deliberate pacing. Every system is meant to move across channels.
              </p>
              <Button to="/contact">Request design work</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <SectionHeading kicker="Selections" title="Design portfolio" description="Brand identity, poster runs, and album visuals." />
          <Button variant="ghost" to="/work">See more</Button>
        </div>
        <ProjectGrid projects={designProjects} />
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <SectionHeading
            kicker="Deliverables"
            title="What we deliver"
            description="Modular kits ready for print and digital rollout."
          />
          <div className="grid gap-4 text-sm text-slate">
            <div className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-2">Identity kits</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Logo suite and lockups</li>
                <li>Color and type specifications</li>
                <li>Usage guidelines and export presets</li>
              </ul>
            </div>
            <div className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-2">Campaign assets</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Poster systems and outdoor specs</li>
                <li>Social templates tuned for cadence</li>
                <li>Motion-ready frames for video handoff</li>
              </ul>
            </div>
            <div className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-2">Album & merch</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Album jackets, sleeves, and inserts</li>
                <li>Tour posters and screen-print ready files</li>
                <li>Packaging dielines with production notes</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <SectionHeading
            kicker="Case studies"
            title="How we build narratives"
            description="Mini studies showing how the visuals stretch across touchpoints."
          />
          <div className="grid gap-4 text-sm text-slate">
            <div className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-1">Pulse Identity</h3>
              <p>Monoline logotype, kinetic lines, and vinyl-ready sleeves for an audio collective.</p>
            </div>
            <div className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-1">Signal Posters</h3>
              <p>Avant festival poster grid with metallic inks and deliberate negative space.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Design;
