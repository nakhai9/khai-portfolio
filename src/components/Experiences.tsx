import { BriefcaseBusiness } from "lucide-react";

import Section from "./ui/Section";

type ExperienceProps = {
  list: Array<{
    companyName: string;
    role: string;
    from: string;
    to: string;
    duties: string[];
  }>;
};

const Experiences: React.FC<ExperienceProps> = ({ list }) => {
  return (
    <Section id="experiences" title="Experiences">
      <div className="bg-[var(--hunt-2)] shadow-2xl drop-shadow-lg mx-auto p-4 rounded-md">
        {list?.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden">
                  <BriefcaseBusiness size={30} />
                </div>
                <div>
                  <h3 className="text-lg">{exp.role}</h3>
                  <p className="italic">{exp.companyName}</p>
                  <p className="font-medium text-xs">
                    {exp.from} - {exp.to}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-justify word-wrap">
              <ul className="pl-8">
                {exp?.duties?.map((x, index) => (
                  <li key={index}>
                    <span className="inline-block bg-[var(--hunt-3)] mr-3 rounded-md w-1 h-3"></span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
