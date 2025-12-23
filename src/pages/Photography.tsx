import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import ServicesStrip from '../components/ui/ServicesStrip';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import SectionHeading from '../components/ui/SectionHeading';
import { photographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Photography = () => {
  usePageMeta({ title: 'Photography | nuViz Studio', description: 'Editorial photography crafted by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-0 pb-0">
        <div className="relative h-[340px] overflow-hidden rounded-none">
          <img
            src="https://assets.nuviz.studio/placeholders/photo-hero.jpg"
            alt="Photography hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-4">
              <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Photography</p>
              <h1>Editorial stills with patience and pulse.</h1>
              <h2 className="font-serif text-2xl text-gray-100">Calm direction, sculpted light, and strong posture.</h2>
              <p className="max-w-2xl text-gray-200">
                Portraits, campaigns, and still-life studies built to feel deliberate. We balance light, posture, and negative space for clarity.
              </p>
              <div className="flex gap-3">
                <Button to="/contact">Book a shoot</Button>
                <Button variant="ghost" to="/work" className="border-white/60 text-white bg-white/10 hover:bg-white/20">
                  View portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <SectionHeading kicker="Series" title="Featured photography" description="Editorial studies crafted on location and in studio." />
          <TextLink to="/work">See all work</TextLink>
        </div>
        <ProjectGrid projects={photographyProjects} />
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <SectionHeading
              kicker="Guidance"
              title="Services & structure"
              description="We design shoots around clear tone and pacing. Expect pre-production support, on-set direction, and considered retouching."
            />
            <ServicesStrip
              services={[
                { title: 'Portraits', detail: 'Artist press kits, album liners, director portraits, executive presence.' },
                { title: 'Campaigns', detail: 'Lookbooks, launch visuals, and hero imagery for product lines.' },
                { title: 'Editorial stories', detail: 'Magazine-ready narratives shot on location or in studio.' },
                { title: 'Product & still life', detail: 'Tabletop sets, macro detail, and texture-forward lighting.' }
              ]}
            />
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white space-y-3">
            <h3 className="font-serif text-xl">Investment ranges</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li>Studio portrait sessions: from $1.5k with lighting, direction, and selects.</li>
              <li>Location campaigns: $3k–$7k depending on crew, permits, and deliverables.</li>
              <li>Editorial stories: $2k–$5k with scouting, styling partners, and post.</li>
            </ul>
            <Button to="/contact">Request a quote</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <SectionHeading kicker="Answers" title="FAQ" />
            <FAQAccordion
              items={[
                {
                  question: 'Turnaround times',
                  answer: 'Portrait galleries deliver within 5 business days. Campaigns land within 10–14 days including retouch rounds.'
                },
                {
                  question: 'Deliverables',
                  answer: 'We provide high-res finals, web crops, and color/black-and-white options. Retouching notes are documented and versioned.'
                },
                {
                  question: 'Licensing',
                  answer: 'Usage is tailored to your needs—press, digital, paid, or out-of-home. We keep it simple and transparent.'
                }
              ]}
            />
          </div>
          <div className="bg-charcoal text-white rounded-subtle p-6 space-y-3">
            <h3 className="font-serif text-xl">Ready to shoot?</h3>
            <p className="text-gray-200">Share your concept, reference images, or schedule. We respond within one business day.</p>
            <Button to="/contact">Start booking</Button>
            <p className="text-sm text-gray-300">Prefer a call? Email studio@nuviz.studio and we will set a time.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Photography;
