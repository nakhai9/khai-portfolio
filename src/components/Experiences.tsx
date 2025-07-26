/* eslint-disable @typescript-eslint/no-empty-object-type */
import Section from "./ui/Section";

type ExperienceProps = {
  // TODO
};

const Experiences: React.FC<ExperienceProps> = () => {
  return (
    <Section title="Experiences">
      <div className="bg-[#323443] shadow-2xl drop-shadow-lg p-4 border-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg">Website Developer</h3>
            <p className="italic">Simplify Dalat - Can Tho Campus</p>
          </div>
          <p>2021-present</p>
        </div>
        <div className="text-justify word-wrap">
          <ul className="pl-8 list-disc">
            <li>
              Developed and maintained responsive, user-friendly Uis based on
              client requirements.
            </li>
            <li>
              Migrated legacy UI use standalone component to improve
              performance.
            </li>
            <li>
              Identified and removed redundant code, boosting app performance.
            </li>
            <li>Wrote automation tests using Selenium Webdriver.</li>
            <li>
              Worked directly with client to build and implement new features.
            </li>
            <li>Maintained system and upgraded new UIs based on the design.</li>
            <li>Wrote user guide for the end customer.</li>
            <li>Integrated social login feature with Facebook and Google.</li>
            <li>Worked in an Agile Scrum team environment.</li>
            <li>
              Developed and maintained basic backend APIs to support frontend
              team.
            </li>
            <li>
              Took initiative to fix minor backend issues during frontend tasks.
            </li>
            <li>
              Frameworks and libs used: Angular, .Net7, Agile Scrum,
              Tailwindcss, Micro-frontend, NxDev, Ngrx/Component-store,
              Bootstrap, React
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
