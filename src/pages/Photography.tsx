import AbstractArt from '../components/ui/AbstractArt';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FAQAccordion from '../components/ui/FAQAccordion';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ServicesStrip from '../components/ui/ServicesStrip';
import TextLink from '../components/ui/TextLink';
import { photographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Photography = () => {
  usePageMeta({ title: 'Photography | nuViz Studio', description: 'Editorial photography crafted by nuViz Studio.' });

  return (
    <div>
      <Section
        bleed
        padClassName="pt-28 pb-12 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-abstract" />
          <div className="absolute -top-20 -right-28 opacity-40">
            <AbstractArt className="h-[520px] w-[720px]" variant="soft" />
          </div>
          <div className="absolute inset-0 opacity-15 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <SectionHeading
                kicker="Photography"
                title="Editorial stills with patience and pulse"
                description={
                  <>
                    <p>
                      Portraits, campaigns, and still-life studies built to feel deliberate. We balance light, posture, and
                      negative space for clarity.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button to="/contact">Book a shoot</Button>
                      <Button variant="ghost" to="/work">
                        View portfolio
                      </Button>
                    </div>
                  </>
                }
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Card className="p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Fast facts</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Direction on set (poses, rhythm, pacing)</li>
                  <li>• Considered retouch + export packs</li>
                  <li>• Coverage designed for press + campaign</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-mono text-2xl text-[var(--text)]">Featured series</h2>
          <TextLink to="/work">See all work</TextLink>
        </div>
        <ProjectGrid projects={photographyProjects} />
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-2">Services & guidance</h2>
            <p className="text-[var(--muted)] mb-4">
              We design shoots around clear tone and pacing. Expect pre-production support, on-set direction, and considered
              retouching.
            </p>
            <ServicesStrip
              services={[
                { title: 'Portraits', detail: 'Artist press kits, album liners, director portraits, executive presence.' },
                { title: 'Campaigns', detail: 'Lookbooks, launch visuals, and hero imagery for product lines.' },
                { title: 'Editorial stories', detail: 'Magazine-ready narratives shot on location or in studio.' },
                { title: 'Product & still life', detail: 'Tabletop sets, macro detail, and texture-forward lighting.' }
              ]}
            />
          </div>
          <Card>
            <h3 className="font-mono text-xl text-[var(--text)] mb-3">Investment ranges</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>Studio portrait sessions: from €1.5k with lighting, direction, and selects.</li>
              <li>Location campaigns: €3k–€7k depending on crew, permits, and deliverables.</li>
              <li>Editorial stories: €2k–€5k with scouting, styling partners, and post.</li>
            </ul>
            <Button className="mt-4" to="/contact">
              Request a quote
            </Button>
          </Card>
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-mono text-2xl text-[var(--text)] mb-3">FAQ</h2>
            <FAQAccordion
              items={[
                { question: 'Turnaround times', answer: 'Portrait galleries deliver within 5 business days. Campaigns land within 10–14 days including retouch rounds.' },
                { question: 'Deliverables', answer: 'We provide high-res finals, web crops, and color/black-and-white options. Retouching notes are documented and versioned.' },
                { question: 'Licensing', answer: 'Usage is tailored to your needs—press, digital, paid, or out-of-home. We keep it simple and transparent.' }
              ]}
            />
          </div>
          <Card className="p-6">
            <h3 className="font-mono text-xl text-[var(--text)]">Ready to shoot?</h3>
            <p className="text-[var(--muted)] mt-2">Share your concept, reference images, or schedule. We respond within one business day.</p>
            <div className="mt-4">
              <Button to="/contact">Start booking</Button>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3">Prefer a call? Email studio@nuviz.studio and we’ll set a time.</p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Photography;
