import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import ServicesStrip from '../components/ui/ServicesStrip';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import TestimonialBlock from '../components/ui/TestimonialBlock';
import ProjectGrid from '../components/ui/ProjectGrid';
import SectionHeading from '../components/ui/SectionHeading';
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

      <Section className="pt-16 pb-12 bg-charcoal text-white">
        <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''} space-y-4 max-w-5xl`}>
          <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Editorial Studio</p>
          <h1>nuViz frames rhythm, story, and texture for artists who move with intention.</h1>
          <h2 className="font-serif text-2xl text-gray-100">Photography, film, music videos, and design led by restraint.</h2>
          <p className="text-gray-100">
            We are a multidisciplinary crew capturing portraits, kinetic films, music videos, and design that holds its own in
            print and motion. Calm sets, deliberate pacing, editorial taste.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/contact">Book a shoot</Button>
            <Button variant="ghost" to="/work" className="bg-white/10 text-white border-white/40 hover:bg-white/20">
              View work
            </Button>
            <TextLink to="/music-videos" className="text-white border-white/50">
              Explore music videos
            </TextLink>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Selected work"
            title="Recent releases"
            description="A small sampling of sets across photography, film, music videos, and design. Each project balances craft, pace, and a clear visual thesis."
          />
          <div ref={workRef} className={`reveal ${workVisible ? 'visible' : ''}`}>
            <ProjectGrid projects={allProjects.slice(0, 6)} />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <TextLink to="/work">View the full portfolio</TextLink>
            <span className="text-slate text-sm">or jump to</span>
            <Link to="/videography" className="text-sm font-semibold underline decoration-2 decoration-accent">
              Videography
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Capabilities"
            title="Services in motion"
            description="Four pillars, tuned for artists, brands, and festivals. Built to scale from lean crews to full productions without losing intimacy."
          />
          <ServicesStrip
            services={[
              {
                title: 'Photography',
                detail: 'Editorial portraiture, campaigns, and on-location stories built around natural rhythm.'
              },
              {
                title: 'Videography',
                detail: 'Brand films, documentaries, and event coverage with intentional pacing and layered sound.'
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
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <SectionHeading
              kicker="Approach"
              title="Process with discipline"
              description="Every project moves through a tight cadence—listening, designing, capturing, refining. We keep crews lean, communicate often, and obsess over the last five percent."
            />
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
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Voices"
            title="Testimonials"
            description="Partners who trust the pace and the framing."
          />
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
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <SectionHeading
              kicker="Next"
              title="Let’s build the next set"
              description="Tell us about the story you want to tell—brand launch, album drop, or tour recap. We respond within one business day with a direction and timeline."
            />
            <div className="flex flex-wrap gap-3">
              <Button to="/contact">Book a shoot</Button>
              <Button variant="ghost" to="/about">
                Meet the studio
              </Button>
            </div>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white shadow-soft space-y-4">
            <h3 className="font-serif text-xl">Latest drops</h3>
            <ul className="space-y-3 text-sm text-slate">
              {allProjects.slice(0, 4).map(project => (
                <li key={project.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">{project.title}</p>
                    <p className="text-xs text-slate">{project.category} · {project.year}</p>
                  </div>
                  <Link to={`/work/${project.slug}`} className="text-charcoal font-semibold underline decoration-2 decoration-accent">
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
