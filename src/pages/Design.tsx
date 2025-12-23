import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import { designProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Design = () => {
  usePageMeta({ title: 'Design | nuViz Studio', description: 'Brand identity, posters, and album artwork by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-16">
        <p className="text-xs uppercase tracking-wide text-slate">Design</p>
        <h1 className="text-4xl font-serif">Identity and artwork with intent.</h1>
        <p className="text-slate mt-3 max-w-3xl">
          Brand systems, posters, album covers, and social kits that translate across tour posters to sleeves. We design with
          a grid-first mindset and cinematic flair.
        </p>
        <div className="mt-4 flex gap-3">
          <Button to="/contact">Start a brief</Button>
          <Button variant="ghost" to="/work">
            See portfolio
          </Button>
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-serif mb-2">What we deliver</h2>
            <ul className="list-disc list-inside text-sm text-slate space-y-2">
              <li>Identity systems and logo suites.</li>
              <li>Poster runs for tours and festivals.</li>
              <li>Album artwork and vinyl packaging.</li>
              <li>Social kits with motion-ready assets.</li>
            </ul>
            <p className="text-slate mt-3 text-sm">Need rollout support? We build templates and brand guides for your team.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{
              title: 'Brand identity',
              text: 'Naming support, visual language, and brand manuals for launch-ready teams.'
            }, {
              title: 'Posters & key art',
              text: 'Layered compositions for festivals, tours, and gallery shows with print production guidance.'
            }, {
              title: 'Social systems',
              text: 'Reusable templates for reels, carousels, and tour diaries built for speed.'
            }, {
              title: 'Album visuals',
              text: 'Cover art, inner sleeves, stickers, and motion snippets aligned to your sonic palette.'
            }].map(item => (
              <div key={item.title} className="border border-slate/30 rounded-subtle p-4 bg-white">
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif">Case studies</h2>
          <TextLink to="/work">View all work</TextLink>
        </div>
        <ProjectGrid projects={designProjects} />
      </Section>

      <Section className="bg-charcoal text-white">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-serif mb-3">Mini case notes</h2>
            <div className="space-y-3 text-sm text-gray-200">
              <div>
                <p className="font-semibold text-white">Pulse Identity</p>
                <p>Monoline logotype, animated stripes, and print specs for metallic inks.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Signal Posters</p>
                <p>Grid-driven posters with foil hits and QR-linked microsite.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-gray-200">
              Need a deck or rollout plan? We can align on deliverables in a 20-minute call and outline a clear schedule.
            </p>
            <Button to="/contact">Request pricing</Button>
            <p className="text-sm text-gray-300">We also collaborate with your in-house designers as an extension team.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Design;
