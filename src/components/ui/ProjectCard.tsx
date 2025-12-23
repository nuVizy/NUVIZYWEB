import { Link } from 'react-router-dom';
import { Project } from '../../content/portfolio';
import TagList from './TagList';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => (
  <Link
    to={`/work/${project.slug}`}
    className="group block rounded-subtle overflow-hidden panel border-[rgba(0,255,65,0.04)]"
  >
    <div className="aspect-video bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-transparent overflow-hidden">
      <img
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-90"
      />
    </div>
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neon-dim">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="font-display text-xl leading-tight neon">{project.title}</h3>
      <p className="text-sm text-[var(--muted)]">{project.description}</p>
      <TagList tags={project.tags.slice(0, 3)} />
    </div>
  </Link>
);

export default ProjectCard;
