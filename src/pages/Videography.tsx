import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import { videographyProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const Videography = () => {
  usePageMeta({ title: 'Videography | nuViz Studio', description: 'Film direction and cinematography by nuViz Studio.' });

  return (
    <div>
      <Section className="pt-16">
        <p className="text-xs uppercase tracking-wide text-slate">Videography</p>
        <h1 className="text-4xl font-serif">Films that breathe, with crisp pacing.</h1>
        <p className="text-slate mt-3 max-w-2xl">
          Brand films, documentaries, and event coverage crafted with steady direction and polished post. We keep stories
          human while keeping crews nimble.
        </p>
        <div className="mt-4 flex gap-3">
          <Button to="/contact">Start a project</Button>
          <Button variant="ghost" to="/music-videos">
            See music videos
          </Button>
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-serif mb-2">Brand films & events</h2>
            <p className="text-slate mb-4">
              We choreograph camera, sound, and pacing to keep audiences close. Coverage spans keynotes, festivals, and launch
              moments.
            </p>
            <ul className="space-y-2 text-sm text-slate list-disc list-inside">
              <li>Shotlists built for coverage and emotion.</li>
              <li>Audio capture and layered ambience for depth.</li>
              <li>On-the-fly lighting adjustments to keep continuity.</li>
            </ul>
          </div>
          <div className="border border-slate/30 rounded-subtle p-6 bg-white">
            <h3 className="font-serif text-xl mb-3">Deliverables</h3>
            <ul className="space-y-2 text-sm text-slate list-disc list-inside">
              <li>Hero edits for web and broadcast.</li>
              <li>Social cuts in 1:1, 9:16, and 16:9 ratios.</li>
              <li>Clean captions, audio stems, and ProRes masters.</li>
              <li>Color graded stills pulled from the footage.</li>
            </ul>
            <h4 className="font-semibold mt-4">Typical timelines</h4>
            <p className="text-sm text-slate">Production in 1–3 days, first edit in 7 days, final masters in 12–18 days.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif">Selected films</h2>
          <TextLink to="/work">View all work</TextLink>
        </div>
        <ProjectGrid projects={videographyProjects} />
      </Section>

      <Section className="bg-charcoal text-white">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-serif mb-3">Process clarity</h2>
            <FAQAccordion
              items={[
                { question: 'Crew size', answer: 'We scale between a two-person mobile unit and a full crew with G&E. We keep communication crisp either way.' },
                { question: 'Revisions', answer: 'Two edit rounds are standard. We welcome early feedback to keep the cut aligned.' },
                { question: 'Sound & music', answer: 'We shape bespoke soundbeds, capture nat sound, and clear music with your team or ours.' }
              ]}
            />
          </div>
          <div className="space-y-3">
            <p className="text-gray-200">
              Ready for cameras to roll? Share your script, brief, or treatment. We will respond with crew, gear list, and a
              realistic schedule.
            </p>
            <Button to="/contact">Request a quote</Button>
            <p className="text-sm text-gray-300">Prefer a walkthrough? We can join your production meeting to align.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Videography;
