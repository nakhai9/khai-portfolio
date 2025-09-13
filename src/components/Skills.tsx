/* eslint-disable @typescript-eslint/no-empty-object-type */
import { APP_DATA } from "../data/data";
import Section from "./ui/Section";

{
  /* https://www.figma.com/community/file/1161721251517347938 */
  // https://techicons.dev/icons/nestjs
}

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="flex flex-wrap justify-center gap-6">
        {APP_DATA.skills.map((x, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-[var(--hunt-2)] shadow-lg p-4 rounded w-28 h-28"
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
