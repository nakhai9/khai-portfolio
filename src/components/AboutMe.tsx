import { FC } from "react";

import { APP_DATA } from "../data/data";
import { Section } from "./ui";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type AboutMeProps = {};
const AboutMe: FC<AboutMeProps> = () => {
  return (
    <Section id="about-me" title="About me">
      <div className="flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="shadow-amber-500 shadow-lg p-2 border-[var(--hunt-3)] border-1 rounded w-60 h-60 overflow-hidden">
          <img
            src={APP_DATA.me.avatar}
            alt="avatar"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-96 text-center text-justify">
            {APP_DATA.me.description}
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-1 bg-[var(--hunt-2)] shadow-lg p-4 rounded-md w-24 h-20">
              <p className="font-bold text-[var(--hunt-3)] text-xl">2+</p>
              <span className="text-xs">Years</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-[var(--hunt-2)] shadow-lg p-4 rounded-md w-24 h-20">
              <p className="font-bold text-[var(--hunt-3)] text-xl">2+</p>
              <span className="text-xs">Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-[var(--hunt-2)] shadow-lg p-4 rounded-md w-24 h-20">
              <p className="font-bold text-[var(--hunt-3)] text-xl">5+</p>
              <span className="text-xs">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutMe;
