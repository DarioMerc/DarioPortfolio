import React from "react";

const ExperienceItem = (job) => {
  return (
    <div>
      <hr />
      <div className="w-11/12 mx-auto text-left px-3 py-2">
        <div className="flex">
          <p className="flex-1 text-xl font-bold">
            {job.role} for {job.company}
          </p>
          <p className="flex-2 text-xl font-bold">{job.year}</p>
        </div>
        <div>{job.summary}</div>
        <ul className="pl-10 list-disc list-inside">
          {job.bullets.map((bullet) => {
            return (
              <>
                <li>{bullet.title}</li>
                {bullet.subBullets &&
                  bullet.subBullets.map((subBullet) => {
                    return <li className="pl-10">{subBullet}</li>;
                  })}
              </>
            );
          })}
        </ul>
        <p>Tools: {job.tools && job.tools}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;