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
      <AppBar />
      <main className="relative mx-auto max-w-5xl">
        <Intro />
        <div className="flex flex-col gap-10">
          <AboutMe />
          <Skills />
          <Experiences list={APP_DATA.experiences} />
          <SideProjects projects={APP_DATA.projects} />
          <ContactMe />
          <Footer />
        </div>
      </main>
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}

export default App;
