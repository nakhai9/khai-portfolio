import "./App.css";
import "aos/dist/aos.css";

import { FileUser, Github, Linkedin, Mail } from "lucide-react";

import Experiences from "./components/Experiences";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import { APP_DATA } from "./data/data";

type AppBarProps = {
  redirectCb?: (url: string) => void;
};

const AppBar = ({ redirectCb }: AppBarProps) => (
  <div className="top-0 left-0 z-10 fixed flex justify-between items-center bg-[#0a0119] shadow-lg px-4 border-slate-600 border-b w-full h-12">
    <button type="button" className="text-amber-600 text-2xl">
      {APP_DATA.me.name}
    </button>
    <div className="flex justify-between items-center gap-2">
      <button
        type="button"
        className="hover:text-amber-600 cursor-pointer"
        onClick={() => redirectCb && redirectCb("https://github.com/nakhai9")}
      >
        <Github />
      </button>
      <button
        type="button"
        className="hover:text-amber-600 cursor-pointer"
        onClick={() =>
          redirectCb && redirectCb("https://www.linkedin.com/in/nakhai9/")
        }
      >
        <Linkedin />
      </button>
      <button type="button" className="hover:text-amber-600 cursor-pointer">
        <Mail />
      </button>
    </div>
  </div>
);

function App() {
  const navigateByUrl = (url: string) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="relative w-full">
      <AppBar redirectCb={navigateByUrl} />
      <div className="relative mx-auto p-4 sm:p-0 md:p-0 max-w-5xl">
        <div className="flex items-center pt-56">
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

              <div>
                <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 px-3 py-2 rounded-xl font-bold hover:text-amber-600 cursor-pointer">
                  <FileUser />
                  <span>DOWNLOAD CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Skills />
        <Experiences />
        <SideProjects projects={APP_DATA.projects} />
        {/* <ContactMe /> */}

        <div className="flex items-center mt-10 border-slate-600 border-t h-12 text-xs">
          <p>&copy; {APP_DATA.me.name} 2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
