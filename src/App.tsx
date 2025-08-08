import './App.css';

import { useRef } from 'react';

import { FileUser } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

import ContactMe from './components/ContactMe';
import Experiences from './components/Experiences';
import SideProjects from './components/SideProjects';
import Skills from './components/Skills';
import { APP_DATA } from './data/data';
import { downloadResumeFile } from './utils/common';

type AppBarProps = {
  onMenuClick?: (section: string) => void;
  redirectCb?: (url: string) => void;
};

const AppBar = ({ onMenuClick }: AppBarProps) => (
  <div className="top-0 left-0 z-10 fixed flex justify-between items-center bg-[#0a0119] shadow-lg px-4 border-slate-600 border-b w-full h-12">
    <button type="button" className="text-amber-600 text-2xl">
      {APP_DATA.me.name}
    </button>
    <div className="flex justify-between items-center gap-2">
      <button
        className="px-2 py-1 text-white hover:text-amber-500 cursor-pointer"
        onClick={() => onMenuClick?.("home")}
      >
        Home
      </button>
      <button
        className="px-2 py-1 text-white hover:text-amber-500 cursor-pointer"
        onClick={() => onMenuClick?.("skills")}
      >
        Skills
      </button>
      <button
        className="px-2 py-1 text-white hover:text-amber-500 cursor-pointer"
        onClick={() => onMenuClick?.("projects")}
      >
        Projects
      </button>
    </div>
  </div>
);

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (section: string) => {
    if (section === "home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <AppBar onMenuClick={handleMenuClick} />
      <div className="relative mx-auto p-4 sm:p-0 md:p-0 max-w-5xl">
        <div ref={homeRef} className="flex items-center pt-56">
          <div className="flex sm:flex-row md:flex-row flex-col justify-center items-center gap-10">
            <div className="shadow-md rounded-full w-52 h-52 overflow-hidden">
              <img
                className="bg-cover w-full h-full"
                src={APP_DATA.me.avatar}
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1 items-center sm:items-start md:items-start gap-4 p-4">
              <h1 className="font-bold text-3xl">
                Hi, I'm
                <span className="ml-2 text-amber-600">{APP_DATA.me.name}</span>
              </h1>

              <p className="text-2xl text-capitalize">{APP_DATA.me.role}</p>

              <p className="text-slate-300 text-xl text-justify">
                {APP_DATA.me.summary}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => downloadResumeFile("/KhaiNguyen.pdf")}
                  type="button"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 px-3 py-2 rounded-xl font-bold hover:text-amber-600 cursor-pointer"
                >
                  <FileUser />
                  <span>DOWNLOAD CV</span>
                </button>
                <button
                  className="flex items-center gap-2 bg-translate hover:bg-slate-100/30 px-3 py-2 border border-white rounded-xl font-bold cursor-pointer"
                  onClick={() => handleMenuClick("contact")}
                >
                  <span>GET IN TOUCH</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>
        <Experiences />
        <div ref={projectsRef}>
          <SideProjects projects={APP_DATA.projects} />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>

        <div className="flex items-center mt-10 border-slate-600 border-t h-12 text-xs">
          <p>&copy; {APP_DATA.me.name} 2025</p>
        </div>
      </div>
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}

export default App;
