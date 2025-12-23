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
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate">Portfolio</p>
          <h1 className="text-3xl font-serif">Work</h1>
          <p className="text-slate mt-2 max-w-2xl">
            A curated mix of photography, film, music videos, and design built for artists, brands, and festivals.
          </p>
        </div>
        <Button to="/contact">Request a quote</Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 text-sm font-semibold">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-2 border rounded-subtle transition-colors duration-200 ${
              active === category ? 'bg-charcoal text-white border-charcoal' : 'border-slate/40 text-charcoal'
            }`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ProjectGrid projects={filtered} />
    </Section>
  );
};

export default Work;
