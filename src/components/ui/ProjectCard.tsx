import { Link } from 'react-router-dom';
import { Project } from '../../content/portfolio';
import TagList from './TagList';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => (
  <Link
    to={`/work/${project.slug}`}
    className="group block border border-slate/30 rounded-subtle overflow-hidden bg-white shadow-soft"
  >
    <div className="aspect-video bg-slate/10 overflow-hidden">
      <img
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="font-serif text-xl leading-tight group-hover:text-charcoal">{project.title}</h3>
      <p className="text-sm text-slate">{project.description}</p>
      <TagList tags={project.tags.slice(0, 3)} />
    </div>
  </Link>
);

export default ProjectCard;
