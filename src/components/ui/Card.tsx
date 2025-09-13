import React from "react";

import { ExternalLink } from "lucide-react";

type CardProps = {
  project: {
    name: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
    launchUrl?: string;
  };
};
const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="bg-[var(--hunt-2)] shadow-xl border border-[var(--hunt-4)] rounded-md overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer transform">
      <img
        src={project.imageUrl}
        alt="Project Image"
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col gap-2 p-6">
        <h2 className="font-bold text-xl tracking-tight">{project.name}</h2>
        <p className="min-h-20 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-[var(--hunt-3)] p-1 px-3 rounded-xl font-bold text-[var(--hunt-7)] text-xs badge"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex mt-2">
          <a
            href={project.launchUrl}
            className="flex justify-center items-center gap-2 hover:bg-[var(--hunt-5)] px-4 py-2 border border-[var(--hunt-4)] rounded-md text-sm transition duration-300 transform"
            title="Live Preview"
          >
            <ExternalLink className="w-5 h-5" /> <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
