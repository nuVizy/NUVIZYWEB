import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import { usePageMeta } from '../hooks/usePageMeta';

const About = () => {
  usePageMeta({ title: 'About | nuViz Studio', description: 'Story, values, and approach of nuViz Studio.' });

  return (
    <div>
      <Section className="pt-16">
        <p className="text-xs uppercase tracking-wide text-slate">About</p>
        <h1 className="text-4xl font-serif">We are nuViz.</h1>
        <p className="text-slate mt-3 max-w-3xl">
          A creative studio shaped by photographers, directors, and designers. We believe in small crews, decisive direction,
          and delivering work that feels inevitable.
        </p>
        <div className="mt-4 flex gap-3">
          <Button to="/contact">Work with us</Button>
          <Button variant="ghost" to="/work">
            View work
          </Button>
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{ title: 'Values', text: 'Patience, precision, and kindness on set. We hold space for experimentation.' }, { title: 'Approach', text: 'We storyboard, scout, and over-communicate so shoot days stay calm and purposeful.' }, { title: 'Collaboration', text: 'We thrive with artists, labels, agencies, and in-house teams. Credits stay transparent.' }].map(item => (
            <div key={item.title} className="border border-slate/30 rounded-subtle p-4 bg-white">
              <h3 className="font-serif text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-serif mb-2">Studio story</h2>
            <p className="text-slate mb-3">
              nuViz started as a late-night edit bay in Brooklyn and grew into a full creative unit. We chase rhythm in every
              medium—frames, typography, cuts, and light.
            </p>
            <p className="text-slate mb-4">
              We keep post in-house, collaborate with trusted stylists and choreographers, and stay close to artists through every
              stage of the process.
            </p>
            <Button to="/contact">Book a call</Button>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Studios & locations</h3>
            <p className="text-sm text-slate">Primary base in Brooklyn, with partners in Toronto and Los Angeles. We travel light and adapt to new spaces.</p>
            <p className="text-sm text-slate mt-2">Available for remote collaboration and quick-turn edits worldwide.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
