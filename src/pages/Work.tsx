import { useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import ProjectGrid from '../components/ui/ProjectGrid';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import TextLink from '../components/ui/TextLink';
import { allProjects, ProjectCategory } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

const categories: Array<ProjectCategory | 'All'> = ['All', 'Photography', 'Videography', 'Music Video', 'Design'];

const Work = () => {
  usePageMeta({ title: 'Work | nuViz Studio', description: 'Portfolio index of nuViz studio across photo, film, and design.' });
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter(project => project.category === active);
  }, [active]);

  return (
    <div>
      <Section size="lg" padClassName="pt-28 pb-10 md:pt-32 md:pb-12" className="ctx-grid">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Portfolio"
            title="Work"
            description="A curated mix of photography, film, music videos, and design built for artists, brands, labels and festivals."
          />
          <div className="flex items-center gap-3">
            <Button to="/contact">Request a quote</Button>
            <TextLink to="/about">How we work</TextLink>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(category => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                className={
                  'px-3 py-2 text-sm rounded-subtle border transition-colors duration-200 ' +
                  (isActive
                    ? 'bg-[var(--accent-green)] text-[var(--bg)] border-[rgba(140,255,46,0.18)]'
                    : 'border-[var(--accent-dim)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgba(140,255,46,0.03)]')
                }
                onClick={() => setActive(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Section>

      <Section size="xl" tone="borderTop" padClassName="py-12 md:py-16">
        <ProjectGrid projects={filtered} />
      </Section>
    </div>
  );
};

export default Work;
