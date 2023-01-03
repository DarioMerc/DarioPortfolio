import React from "react";
import projects from "../data/projects";
import Project from "./Project";
const Portfolio = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-5">Portfolio</h2>
      <div className="flex items-center justify-center">
        {projects.map((project) => {
          return <Project {...project} key={project.title} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
