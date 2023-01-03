import React from "react";
import Job from "./Job";
import experience from "../data/experience";

const Experience = () => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold ">Experience</h2>
      <p className="text-sm mt-1 mb-3">*Non Tech jobs excluded*</p>
      {experience.map((job) => {
        return <Job {...job} key={job.company} />;
      })}
    </div>
  );
};

export default Experience;
