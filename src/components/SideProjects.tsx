import Section from "./ui/Section";

type SideProjectsProps = {
  projects: Array<{
    name: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
  }>;
};
const SideProjects: React.FC<SideProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects I've Built">
      <div className="gap-4 grid sm:grid-cols-3">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 bg-[#323443] p-2 border hover:border-amber-500 border-transparent rounded-md cursor-pointer"
            >
              <div className="rounded-md h-32 overflow-hidden">
                <img
                  className="bg-auto w-full h-full"
                  src={project.imageUrl}
                  alt="Image"
                />
              </div>
              <div>
                <h3 className="shadow-2xl mb-2 font-medium text-lg">
                  {project.name}
                </h3>
                <p className="text-sm text-justify">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default SideProjects;
