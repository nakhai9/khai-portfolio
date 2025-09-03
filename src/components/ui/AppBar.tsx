import React from 'react';

import {
  Menu,
  X,
} from 'lucide-react';

import { APP_DATA } from '../../data/data';

type NavLink = {
  id: string;
  title: string;
};

type AppBarProps = {
  navLinks: NavLink[];
  onMenuClick?: (section: string) => void;
};

const AppBar: React.FC<AppBarProps> = ({ navLinks, onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);
  return (
    <div>
      <div className="top-0 left-0 z-10 fixed flex justify-between items-center bg-[#0a0119] shadow-lg px-4 border-slate-800/90 border-b w-full h-12">
        <div className="relative flex justify-start mx-auto w-full max-w-4xl">
          <button
            onClick={toggleMenu}
            className="md:hidden hover:bg-amber-500/10 p-2 rounded-full text-amber-500 cursor-pointer"
            type="button"
          >
            <Menu />
          </button>

          <div className="hidden md:flex gap-2 mx-auto">
            {navLinks.length > 0 &&
              navLinks.map((link) => (
                <button
                  key={link.id}
                  className="px-2 py-1 text-white hover:text-amber-500 text-lg cursor-pointer"
                  onClick={() => onMenuClick?.(link.id)}
                >
                  {link.title}
                </button>
              ))}
          </div>

          {isMenuOpen && (
            <ul className="md:hidden top-12 left-0 z-[900] absolute bg-slate-800 shadow-md rounded w-full overflow-hidden transition-all duration-300 ease-in-out menubar">
              <li className="flex justify-between px-4 py-2">
                <h1 className="hover:bg-amber-500/10 text-amber-500 text-xl">
                  {APP_DATA.me.name}
                </h1>
                <button
                  type="button"
                  className="hover:bg-amber-500/10 p-2 rounded-full hover:text-amber-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <X />
                </button>
              </li>
              {navLinks.length > 0 &&
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="hover:bg-amber-500/10 px-4 py-2 text-white hover:text-amber-500 text-lg cursor-pointer"
                    onClick={() => onMenuClick?.(link.id)}
                  >
                    {link.title}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
