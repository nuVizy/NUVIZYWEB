import { Project } from '../../content/portfolio';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectGrid;
