import './App.css';

import { ArrowUp } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

import {
  AboutMe,
  ContactMe,
  Experiences,
  Intro,
  SideProjects,
  Skills,
} from './components';
import { Footer } from './components/ui';
import { APP_DATA } from './data/data';

function App() {
  return (
    <div className="relative px-6 w-full">
      {/* <AppBar navLinks={APP_DATA.navLinks} /> */}
      <main className="relative mx-auto container" >
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
      <button type='button' className='right-6 bottom-6 z-[50] fixed bg-amber-500 p-2 rounded-full text-white cursor-pointer'><ArrowUp /></button>
    </div>
  );
}

export default App;
