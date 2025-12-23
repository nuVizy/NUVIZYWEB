import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { videographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Videography = () => {
  usePageMeta({ title: 'Videography | nuViz Studio', description: 'Brand films and event coverage by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-0 pb-0">
        <div className="relative h-[320px] overflow-hidden rounded-none">
          <img
            src="https://assets.nuviz.studio/placeholders/video-hero.jpg"
            alt="Videography hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-4">
              <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Videography</p>
              <h1>Films with pace, clarity, and restrained motion.</h1>
              <h2 className="font-serif text-2xl text-gray-100">Brand films, event coverage, and docu-style shorts.</h2>
              <p className="max-w-2xl text-gray-200">
                Brand films, documentaries, and event coverage with intentional pacing and layered sound. We create agile setups that keep energy high and crew tight.
              </p>
              <div className="flex gap-3">
                <Button to="/contact">Request a film</Button>
                <Button variant="ghost" to="/work" className="border-white/60 text-white bg-white/10 hover:bg-white/20">
                  View projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <SectionHeading kicker="Highlights" title="Featured videography" description="Sequences built for screens big and small." />
          <Button variant="ghost" to="/work">
            Portfolio
          </Button>
        </div>
        <ProjectGrid projects={videographyProjects} />
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <SectionHeading
              kicker="Coverage"
              title="Formats we love"
              description="From intimate founder stories to high-tempo event recaps, each film is plotted around rhythm and clarity."
            />
            <ul className="space-y-2 text-sm text-slate">
              <li>Brand films with interview cadence and tactile product sequences.</li>
              <li>Event coverage that favors momentum, key moments, and audience reaction.</li>
              <li>Docu-style shorts with minimal setups and patient framing.</li>
              <li>Delivery kits tuned for web, socials, and in-venue screens.</li>
            </ul>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white space-y-3">
            <h3 className="font-serif text-xl">Deliverables & timelines</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li>Pre-pro decks and shotlists within one week of kickoff.</li>
              <li>Rough cuts in 7–10 business days; fine cuts within 14–18 days.</li>
              <li>Exports include captions, aspect ratios, and audio mixes for each channel.</li>
            </ul>
            <Button to="/contact">Schedule a call</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <SectionHeading
            kicker="Notes"
            title="FAQs"
            description="What to expect when we roll cameras."
          />
          <FAQAccordion
            items={[
              { question: 'Crew size', answer: 'Lean crews of 3–6 keep us agile. We scale specialists only when the scene requires it.' },
              { question: 'Audio', answer: 'We prioritize clean dialogue and layered atmos. Mixes deliver stereo and mono as needed.' },
              { question: 'Color', answer: 'We grade for contrast and nuance, with filmic softness—never heavy-handed LUT dumps.' }
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

export default Videography;
