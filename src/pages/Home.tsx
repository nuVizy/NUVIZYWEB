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

const Home = () => {
  usePageMeta({
    title: 'nuViz Studio | Photography, Film, Music Videos, Design',
    description: 'nuViz is a creative studio crafting premium photography, film, music videos, and design with rhythm.'
  });

  const { ref: heroRef, visible: heroVisible } = useReveal();
  const { ref: workRef, visible: workVisible } = useReveal();

  return (
    <div>
      <JsonLdOrganization
        name="nuViz Studio"
        url="https://www.nuviz.studio"
        description="Creative studio for photography, film, music videos, and design."
        location="Brooklyn, NY"
      />
      <Section className="pt-16 pb-14 bg-charcoal text-white">
        <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''}`}>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-3">Creative Studio</p>
          <h1 className="text-4xl sm:text-5xl font-serif leading-tight max-w-3xl">
            nuViz frames rhythm, story, and texture for artists who move with intention.
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200">
            We are a multidisciplinary crew capturing editorial portraits, kinetic films, music videos, and brand design that
            holds its own in print and motion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">Book a shoot</Button>
            <Button variant="ghost" to="/work">
              View work
            </Button>
            <TextLink to="/music-videos" className="text-white border-white/60">
              Explore music videos
            </TextLink>
          </div>
        </div>
      </Section>

      <Section className="bg-white" id="featured">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">Selected work</p>
            <h2 className="text-2xl font-serif">Featured cuts</h2>
          </div>
          <TextLink to="/work">View all work</TextLink>
        </div>
        <div ref={workRef} className={`reveal ${workVisible ? 'visible' : ''}`}>
          <ProjectGrid projects={allProjects.slice(0, 6)} />
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">Capabilities</p>
            <h2 className="text-2xl font-serif">Services in motion</h2>
          </div>
          <TextLink to="/contact">Request a quote</TextLink>
        </div>
        <ServicesStrip
          services={[
            {
              title: 'Photography',
              detail: 'Editorial portraiture, campaigns, and on-location stories built around natural rhythm.'
            },
            {
              title: 'Videography',
              detail: 'Brand films, documentaries, and event coverage with intentional pacing and rich soundbeds.'
            },
            {
              title: 'Music Videos',
              detail: 'Narrative and performance-led videos with tight shotlists, bold lighting, and dynamic edits.'
            },
            {
              title: 'Design',
              detail: 'Identity systems, posters, album covers, and social visuals anchored by strong grids.'
            }
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">Approach</p>
            <h2 className="text-2xl font-serif mb-4">Process with discipline</h2>
            <p className="text-slate mb-6">
              Every project moves through a tight cadence—listening, designing, capturing, refining. We keep crews lean,
              communicate often, and obsess over the last 5%. Here is how we move.
            </p>
            <Button to="/contact">Start a project</Button>
          </div>
          <ProcessTimeline
            steps={[
              {
                title: 'Discovery & Treatment',
                description: 'We align on tone, references, and logistics before cameras roll. Treatments stay visual and concise.'
              },
              {
                title: 'Pre-Production',
                description: 'Shotlists, lighting maps, casting, and schedule. We keep the day nimble and the crew focused.'
              },
              {
                title: 'Production',
                description: 'Calm sets, confident direction, and clear audio capture. We leave space for improvisation.'
              },
              {
                title: 'Post & Delivery',
                description: 'Thoughtful edits, sound design, color passes, and tailored exports for web, socials, and print.'
              }
            ]}
          />
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">Voices</p>
            <h2 className="text-2xl font-serif">Testimonials</h2>
          </div>
          <TextLink to="/work">View case studies</TextLink>
        </div>
        <TestimonialBlock
          testimonials={[
            {
              quote: 'nuViz listens first, then makes the frame feel inevitable. Every scene felt intentional.',
              name: 'Mara Ellis',
              role: 'Creative Lead, Halcyon'
            },
            {
              quote: 'They direct with confidence but never lose the human energy. Our team trusted them instantly.',
              name: 'Rico Alvarez',
              role: 'Producer'
            },
            {
              quote: 'Sharp eye for rhythm and pacing—our music video moves exactly how the track feels.',
              name: 'LUNE',
              role: 'Recording Artist'
            }
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">Ready</p>
            <h2 className="text-2xl font-serif mb-3">Let’s build the next set</h2>
            <p className="text-slate mb-5">
              Tell us about the story you want to tell—brand launch, album drop, or tour recap. We respond within one business
              day with a direction and timeline.
            </p>
            <div className="flex gap-3">
              <Button to="/contact">Book a shoot</Button>
              <Button variant="ghost" to="/about">
                Meet the studio
              </Button>
            </div>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Latest drops</h3>
            <ul className="space-y-3 text-sm text-slate">
              {allProjects.slice(0, 4).map(project => (
                <li key={project.id} className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <Link to={`/work/${project.slug}`} className="text-charcoal font-semibold underline">
                    View
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
