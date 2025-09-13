import React, { useState } from "react";
import clsx from "clsx";
import { APP_DATA } from "../../data/data";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type AppBarProps = {};

const AppBar: React.FC<AppBarProps> = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="bottom-10 left-1/2 z-10 fixed -translate-x-1/2">
      <div className="flex justify-between bg-[var(--hunt-5)]/90 shadow-2xl p-2 rounded-full">
        {APP_DATA.navLinks.map(({ id, title, icon: Icon, href }) => (
          <a
            key={id}
            title={title}
            href={href}
            onClick={() => setActiveTab(id)}
            className={clsx(
              "p-2 rounded-full text-[var(--hunt-4)] hover:text-[var(--hunt-3)]",
              activeTab === id && "bg-[var(--hunt-2)] text-[var(--hunt-4)]"
            )}
          >
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default AppBar;
