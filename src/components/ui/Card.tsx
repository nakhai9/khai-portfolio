import React from 'react';

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
        <div

            className="flex flex-col gap-2 bg-[#323443] p-4 border hover:border-amber-500 border-transparent rounded-md cursor-pointer"
        >
            <div className="bg-white p-2 rounded-md h-32 overflow-hidden">
                <img
                    className="w-full h-full object-contain"
                    src={project.imageUrl}
                    alt="Image"
                />
            </div>
            <div className="flex flex-col justify-between gap-2">
                <div>
                    <div className="flex flex-col mb-2">
                        <h3 className="shadow-2xl font-medium text-lg">
                            {project.name}
                        </h3>
                        <a
                            className="text-blue-500 text-sm"
                            href={project.launchUrl}
                        >
                            {project.launchUrl}
                        </a>
                    </div>
                    <p className="text-sm text-justify">{project.description}</p>
                </div>
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