import React from "react";

const Job = (job) => {
  return (
    <div>
      <hr />
      <div className=" text-left px-0 py-2">
        <div className="flex mb-2">
          <p className="flex-auto text-2xl font-bold">
            {job.role} <span className="font-normal text-xl">for</span>{" "}
            {job.company}
          </p>
          <span className="w-100%"></span>
          <p className="flex text-2xl font-bold">{job.year}</p>
        </div>
        <div className="text-lg">
          <div className="pb-2">{job.summary}</div>
          <ul className="pl-10 pb-2 list-disc list-inside">
            {job.bullets &&
              job.bullets.map((bullet) => {
                return (
                  <div key={bullet.title}>
                    <li>{bullet.title}</li>
                    {bullet.subBullets &&
                      bullet.subBullets.map((subBullet) => {
                        return (
                          <li className="pl-10" key={subBullet}>
                            {subBullet}
                          </li>
                        );
                      })}
                  </div>
                );
              })}
          </ul>
          {job.tools && (
            <div className="flex">
              <p className="mr-2 font-extrabold">Tools:</p>
              <p>{job.tools.join(", ")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
