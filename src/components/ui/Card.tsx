import React from 'react';

import { ExternalLink } from 'lucide-react';

type CardProps = {
    project: {
        name: string;
        description: string;
        imageUrl?: string;
        technologies: string[];
        launchUrl?: string;
    }
}
const Card: React.FC<CardProps> = ({ project }) => {
    return (
        <div className="bg-[#323443] shadow-xl border border-slate-700 rounded-md overflow-hidden hover:scale-105 transition-all duration-300 transform">
            <img src={project.imageUrl} alt="Project Image" className="w-full h-48 object-cover" />
            <div className="flex flex-col gap-3 p-6">
                <div className='flex justify-between items-center'>
                    <h2 className="font-bold text-xl tracking-tight">{project.name}</h2>
                    <a href={project.launchUrl} className="inline-flex justify-center items-center bg-amber-500 hover:bg-amber-700 rounded-full w-8 h-8 text-white transition hover:-translate-y-1 duration-300 transform" title="Live Preview">
                        <ExternalLink size={16} />
                    </a>
                </div>
                <p className="min-h-20 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="bg-amber-600 p-1 px-3 rounded-xl font-bold text-xs badge"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card