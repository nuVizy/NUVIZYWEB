import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { usePageMeta } from '../hooks/usePageMeta';

const About = () => {
  usePageMeta({ title: 'About | nuViz Studio', description: 'Story and values behind nuViz Studio.' });

  return (
    <Section className="pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <h1 className="sr-only">About nuViz</h1>
          <SectionHeading
            kicker="Studio"
            title="About nuViz"
            description="nuViz is a creative studio built by cinematographers, photographers, and designers who care about rhythm and restraint. We value collaboration, clarity, and kindness on set."
          />
          <p className="text-slate text-base">
            We work between Brooklyn, Toronto, and Los Angeles. Every engagement is tailored—small crews for intimacy, larger units when production demands. We welcome artist-led ideas and build around them.
          </p>
          <p className="text-slate text-base">
            The studio champions: listening first, designing with intention, crafting in-camera whenever possible, and delivering with precision. We keep feedback loops tight and transparent.
          </p>
          <Button to="/contact">Start a conversation</Button>
        </div>
        <div className="space-y-6">
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Values</h3>
            <ul className="list-disc list-inside text-slate space-y-1 text-sm">
              <li>Patience on set, urgency in communication.</li>
              <li>Respect for every collaborator’s craft.</li>
              <li>Images that age well—never trendy for trend’s sake.</li>
              <li>Clear rights, clean handoffs, organized archives.</li>
            </ul>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Collaboration</h3>
            <p className="text-slate text-sm mb-3">We often partner with lighting designers, choreographers, and stylists to build the right language for each project.</p>
            <p className="text-slate text-sm">Studios and crews are available in Brooklyn, Toronto, and Los Angeles with travel kits ready.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
