/* eslint-disable @typescript-eslint/no-empty-object-type */
import { BriefcaseBusiness } from 'lucide-react';

import Section from './ui/Section';

type ExperienceProps = {
  // TODO
};

const Experiences: React.FC<ExperienceProps> = () => {
  return (
    <Section title="Experiences">
      <div className="bg-[#323443] shadow-2xl drop-shadow-lg p-4 border-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden">
              <BriefcaseBusiness size={30} />
            </div>
            <div>
              <h3 className="text-lg">Website Developer</h3>
              <p className="italic">Simplify Dalat - Can Tho Campus</p>
            </div>
          </div>
        </div>
        <div className="text-justify word-wrap">
          <ul className="pl-8">
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              <span>
                Developed and maintained responsive, user-friendly Uis based on
                client requirements.
              </span>
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Migrated legacy UI use standalone component to improve
              performance.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Identified and removed redundant code, boosting app performance.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Wrote automation tests using Selenium Webdriver.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Worked directly with client to build and implement new features.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Maintained system and upgraded new UIs based on the design.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Wrote user guide for the end customer.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Integrated social login feature with Facebook and Google.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Worked in an Agile Scrum team environment.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Developed and maintained basic backend APIs to support frontend
              team.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
              Took initiative to fix minor backend issues during frontend tasks.
            </li>
            <li>
              <span className="inline-block bg-amber-500 mr-3 rounded-md w-1 h-3"></span>
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
