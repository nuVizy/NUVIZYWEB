import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import FAQAccordion from '../components/ui/FAQAccordion';
import { musicVideoProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const MusicVideos = () => {
  usePageMeta({ title: 'Music Videos | nuViz Studio', description: 'Music video direction and production by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-16">
        <p className="text-xs uppercase tracking-wide text-slate">Music Videos</p>
        <h1 className="text-4xl font-serif">Visual rhythm that honors the track.</h1>
        <p className="text-slate max-w-3xl mt-3">
          We design shotlists, choreography, and lighting around the beat. Expect intentional pacing, performance guidance,
          and edits that hit on the one.
        </p>
        <div className="mt-4 flex gap-3">
          <Button to="/contact">Book a video</Button>
          <Button variant="ghost" to="/videography">
            See brand films
          </Button>
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-serif mb-2">Packages</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[{title:'Starter',detail:'One location, lean crew, performance-focused edit.'},{title:'Standard',detail:'Two locations, mood lighting plan, stylized grade.'},{title:'Premium',detail:'Narrative arcs, choreography, full art direction, BTS stills.'}].map(pkg => (
                <div key={pkg.title} className="border border-slate/30 rounded-subtle p-4 bg-white">
                  <h3 className="font-serif text-lg mb-2">{pkg.title}</h3>
                  <p className="text-sm text-slate">{pkg.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Credits & collaboration</h3>
            <p className="text-slate text-sm mb-3">
              We welcome label creatives, choreographers, and stylists into the process. Credits stay transparent and we share
              BTS assets for your rollout.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-2">
              <li>Pre-production: treatments, casting support, and budget clarity.</li>
              <li>Performance coverage with multi-cam options.</li>
              <li>Color grade and sound design tuned to the mix.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif">Selected videos</h2>
          <TextLink to="/work">View all work</TextLink>
        </div>
        <ProjectGrid projects={musicVideoProjects} />
      </Section>

      <Section className="bg-charcoal text-white">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-serif mb-3">FAQs</h2>
            <FAQAccordion
              items={[
                { question: 'Creative direction', answer: 'We pair director and movement coach to align on blocking, wardrobe, and tone before shoot day.' },
                { question: 'Timelines', answer: 'Typical timeline: 1 week pre-pro, 1-2 shoot days, first edit in 7 days, final delivery in 12–15 days.' },
                { question: 'Delivery formats', answer: 'We master for YouTube, broadcast, and socials, with clean and texted versions.' }
              ]}
            />
          </div>
          <div className="space-y-3">
            <p className="text-gray-200">
              Want to riff on a treatment? Send your track and references. We will pitch visual rhythm and production approach
              that respects budget and story.
            </p>
            <Button to="/contact">Plan a shoot</Button>
            <p className="text-sm text-gray-300">Need album art too? Visit our design services.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MusicVideos;
