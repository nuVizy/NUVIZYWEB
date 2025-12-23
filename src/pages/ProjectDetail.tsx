import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Lightbox from '../components/ui/Lightbox';
import Section from '../components/ui/Section';
import TagList from '../components/ui/TagList';
import { allProjects } from '../content/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => allProjects.find(item => item.slug === slug), [slug]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  usePageMeta({
    title: project ? `${project.title} | nuViz Work` : 'Project | nuViz',
    description: project ? project.description : 'nuViz project detail.'
  });

  if (!project) {
    return (
      <Section className="pt-16">
        <h1 className="text-4xl font-serif">Project not found</h1>
        <p className="text-slate mt-2">This project has moved. Explore our portfolio instead.</p>
        <Button className="mt-4" to="/work">
          Back to work
        </Button>
      </Section>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div>
      <Section className="pt-16">
        <header className="space-y-4 max-w-4xl">
          <p className="text-[12px] tracking-[0.24em] uppercase text-accent">{project.category}</p>
          <h1>{project.title}</h1>
          <h2 className="font-serif text-2xl">Project overview</h2>
          <p className="text-slate max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate">
            <span>Year: {project.year}</span>
            <span>Role: {project.role}</span>
            {project.location && <span>Location: {project.location}</span>}
          </div>
          <TagList tags={project.tags} />
          <div className="text-sm text-slate">
            <p className="font-semibold text-charcoal mb-1">Credits</p>
            <ul className="list-disc list-inside space-y-1">
              {project.credits.map(credit => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
        </header>
      </Section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
        <div className="aspect-video rounded-subtle overflow-hidden shadow-soft">
          <img src={project.coverImage.src} alt={project.coverImage.alt} className="w-full h-full object-cover" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Cover frame</p>
      </div>

      <Section>
        <SectionHeading kicker="Gallery" title="Selected frames" description="Tap to open larger frames. Captions note intent." />
        <div className="grid gap-4 sm:grid-cols-2 mt-6">
          {project.galleryImages.map((image, index) => (
            <figure key={image.src} className="relative group overflow-hidden rounded-subtle border border-slate/30 bg-white">
              <button onClick={() => setLightboxIndex(index)} className="w-full h-full text-left">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <figcaption className="px-3 py-2 text-xs text-slate border-t border-slate/20">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="bg-slate/5">
        <div className="flex items-center justify-between">
          <div>
            <SectionHeading kicker="Sequence" title="Next project" description="Continue through the portfolio." />
          </div>
          <Button onClick={() => navigate(`/work/${nextProject.slug}`)}>Open {nextProject.title}</Button>
        </div>
      </Section>

      {lightboxIndex !== null && (
        <Lightbox images={project.galleryImages} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  );
};

export default ProjectDetail;
