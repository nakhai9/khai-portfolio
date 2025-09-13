import { Card } from "./ui";
import Section from "./ui/Section";

type SideProjectsProps = {
  projects: Array<{
    name: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
    launchUrl?: string;
  }>;
};
const SideProjects: React.FC<SideProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects I've Built">
      <div className="gap-5 grid sm:grid-cols-2 md:grid-cols-3">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
      </div>
    </Section>
  );
};

export default SideProjects;
