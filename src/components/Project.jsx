import React from "react";

const Project = (project) => {
  return (
    <a
      href={project.link}
      rel="noopener noreferrer"
      className="border-solid border-2 w-4/6 p-3 mx-2 hover:scale-105 transition-transform duration-500"
    >
      <img className="w-full mx-auto object-cover" src={project.image} />
      <p className="text-2xl font-extrabold text-white">{project.title}</p>
      <div className="flex flex-wrap justify-center pt-3">
        {project.tools.map((tool) => {
          return (
            <p
              className="px-1 m-1 mb-0 border-solid border-2 border-white text-white"
              key={tool}
            >
              {tool}
            </p>
          );
        })}
      </div>
    </a>
  );
};

export default Project;
