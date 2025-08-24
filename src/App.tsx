import "./App.css";

import { ToastContainer } from "react-toastify";

import {
  AboutMe,
  ContactMe,
  Experiences,
  Intro,
  SideProjects,
  Skills,
} from "./components";
import { AppBar, Footer } from "./components/ui";
import { APP_DATA } from "./data/data";

function App() {
  return (
    <div className="relative px-6 w-full">
      <AppBar navLinks={APP_DATA.navLinks} />
      <div className="relative">
        <Intro />
        <div className="flex flex-col gap-20">
          <AboutMe />
          <Skills />
          <Experiences />
          <SideProjects projects={APP_DATA.projects} />
          <ContactMe />
          <Footer />
        </div>
      </div>
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}

export default App;
