import { useMemo, useState } from 'react';
import Section from '../components/ui/Section';
import ProjectGrid from '../components/ui/ProjectGrid';
import Button from '../components/ui/Button';
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
    <Section className="pt-16">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-[12px] tracking-[0.24em] uppercase text-accent">Portfolio</p>
            <h1>Work</h1>
            <h2 className="font-serif text-2xl">Portfolio index</h2>
            <p className="text-slate text-base max-w-[65ch]">
              A curated mix of photography, film, music videos, and design built for artists, brands, and festivals. Filter by discipline to dive deeper.
            </p>
          </div>
          <Button to="/contact">Request a quote</Button>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-2 border rounded-subtle transition-colors duration-200 ${
                active === category ? 'bg-charcoal text-white border-charcoal' : 'border-slate/40 text-charcoal hover:border-charcoal'
              }`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filtered} />
      </div>
    </Section>
  );
};

export default Work;
