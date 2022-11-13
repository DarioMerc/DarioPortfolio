import React from "react";
import ExperienceItem from "./ExperienceItem";
import experience from "../data/experience";

const Experience = () => {
  return (
    <>
      <h2 className="text-4xl font-bold ">Experience</h2>
      <p className="text-xs py-1">*Non Tech jobs excluded*</p>
      {experience.map((job) => {
        return <ExperienceItem {...job} key={job.company} />;
      })}
    </>
  );
};

export default Experience;
