import { FC } from "react";

import {
  Download,
  Github,
  Linkedin,
  Mail,
  SquareCode,
  User,
} from "lucide-react";

import { APP_DATA } from "../data/data";
import { downloadResumeFile } from "../utils/common";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type IntroProps = {};
const Intro: FC<IntroProps> = () => {
  return (
    <div id="home" className="flex items-center mx-auto min-h-screen">
      <div className="flex flex-col justify-center items-center gap-5 mx-auto md:max-w-4xl">
        <div className="flex justify-center items-center gap-2 px-6 py-1 border-[var(--hunt-4)] border-2 rounded-full font-semibold">
          <SquareCode size={16} />
          <span>{APP_DATA.me.role}</span>
        </div>

        <div>
          <h1
            className="block font-bold text-4xl md:text-6xl text-center"
            style={{ lineHeight: "unset" }}
          >
            Hi, I'm
            <span className="text-[var(--hunt-3)]"> {APP_DATA.me.name}</span>
          </h1>
        </div>

        <p className="md:text-xl text-center">{APP_DATA.me.summary}</p>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-[var(--hunt-3)] hover:bg-[var(--hunt-6)] px-2 md:px-6 py-2 rounded-md overflow-hidden font-bold text-white text-sm cursor-pointer">
            <User size={16} /> <span>Get in touch</span>
          </button>
          <button
            onClick={() => downloadResumeFile("/KhaiNguyen.pdf")}
            type="button"
            className="flex items-center gap-2 bg-transparent hover:bg-[var(--hunt-5)] px-2 md:px-6 py-2 border-[var(--hunt-4)] border-2 rounded-md overflow-hidden font-bold text-sm cursor-pointer"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="flex justify-center items-center gap-4">
          <a
            href={APP_DATA.me.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[var(--hunt-2)] hover:bg-[var(--hunt-5)] rounded-full w-12 h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Github />
          </a>
          <a
            href={APP_DATA.me.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[var(--hunt-2)] hover:bg-[var(--hunt-5)] rounded-full w-12 h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Linkedin />
          </a>
          <a
            href={`mailto:${APP_DATA.me.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[var(--hunt-2)] hover:bg-[var(--hunt-5)] rounded-full w-12 h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
