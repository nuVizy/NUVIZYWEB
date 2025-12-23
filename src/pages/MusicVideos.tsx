import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { musicVideoProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const MusicVideos = () => {
  usePageMeta({ title: 'Music Videos | nuViz Studio', description: 'Music video creative direction and production by nuViz.' });

  return (
    <div>
      <Section className="pt-0 pb-0">
        <div className="relative h-[320px] overflow-hidden rounded-none">
          <img
            src="https://assets.nuviz.studio/placeholders/mv-hero.jpg"
            alt="Music video hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white space-y-4">
              <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Music Videos</p>
              <h1>Performance and story, cut to the rhythm of the track.</h1>
              <h2 className="font-serif text-2xl text-gray-100">Creative direction, shotlists, and edit rhythm that respect the song.</h2>
              <p className="max-w-2xl text-gray-200">
                Creative direction, shotlists, performance coverage, and edit rhythm tuned to your sound. We protect your voice while sharpening the visual hook.
              </p>
              <Button to="/contact">Start a music video</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <SectionHeading kicker="Reels" title="Featured music videos" description="A mix of narrative and performance-led pieces." />
          <Button variant="ghost" to="/work">All work</Button>
        </div>
        <ProjectGrid projects={musicVideoProjects} />
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <SectionHeading
              kicker="Packages"
              title="Tiers built around your release"
              description="Each tier includes creative direction, production oversight, and edit supervision."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-slate/30 rounded-subtle p-4 bg-white space-y-2">
                <h3 className="font-serif text-lg">Starter</h3>
                <p className="text-sm text-slate">Lean crew, one location, performance-led with artful lighting.</p>
              </div>
              <div className="border border-charcoal rounded-subtle p-4 bg-charcoal text-white space-y-2">
                <h3 className="font-serif text-lg">Standard</h3>
                <p className="text-sm text-gray-100">Two locations, choreography support, on-set playback, and tight edit rhythm.</p>
              </div>
              <div className="border border-slate/30 rounded-subtle p-4 bg-white space-y-2">
                <h3 className="font-serif text-lg">Premium</h3>
                <p className="text-sm text-slate">Narrative threads, specialty lighting, production design, and color-managed delivery.</p>
              </div>
            </div>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white space-y-3">
            <h3 className="font-serif text-xl">Credits & collaboration</h3>
            <p className="text-slate text-sm">
              We thrive in close collaboration with artists, labels, and choreographers. Credits are shared transparently, and we welcome behind-the-scenes documentation.
            </p>
            <Button to="/contact">Book a call</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MusicVideos;
