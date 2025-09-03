/* eslint-disable @typescript-eslint/no-empty-object-type */
import Section from "./ui/Section";

{
  /* https://www.figma.com/community/file/1161721251517347938 */
}

type SkillsProps = {};

const StrongSkills = [
  {
    name: "HTML",
    icon: "/skill-icons/html5.svg",
  },
  {
    name: "CSS",
    icon: "/skill-icons/css3.svg",
  },
  {
    name: "Javascript",
    icon: "/skill-icons/js.svg",
  },
  {
    name: "Typescript",
    icon: "/skill-icons/typescript.svg",
  },
  {
    name: "Angular",
    icon: "/skill-icons/angular.svg",
  },
  {
    name: "React",
    icon: "/skill-icons/react.svg",
  },
  {
    name: "Nodejs",
    icon: "/skill-icons/node-js.svg",
  },
  {
    name: "Tailwind",
    icon: "/skill-icons/tailwind.svg",
  },
  {
    name: "Bootstrap",
    icon: "/skill-icons/bootstrap.svg",
  },
  {
    name: "Next.js",
    icon: "/skill-icons/Next.js.svg",
  },
  {
    name: "Tortoise Git",
    icon: "/skill-icons/TortoiseGit.svg",
  },
  {
    name: "Git",
    icon: "/skill-icons/Git.svg",
  },
  {
    name: "Selenium",
    icon: "/skill-icons/Selenium.svg",
  },
  {
    name: "MySQL",
    icon: "/skill-icons/MySQL.svg",
  },
];

const Skills: React.FC<SkillsProps> = () => {
  return (
    <Section title="Technical Skills">
      <div className="flex flex-wrap justify-center gap-6">
        {StrongSkills.map((x, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-[#323443] p-4 rounded w-28 h-28"
          >
            <img src={x.icon} alt={x.name} className="w-16 h-16" />
            <p className="font-medium text-sm">{x.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
