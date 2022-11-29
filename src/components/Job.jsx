import React from "react";

const Job = (job) => {
  return (
    <div>
      <hr />
      <div className="w-11/12 mx-auto text-left px-3 py-2">
        <div className="flex mb-2">
          <p className="flex-1 text-2xl font-bold">
            {job.role} for {job.company}
          </p>
          <p className="flex-2 text-2xl font-bold">{job.year}</p>
        </div>
        <div className="text-lg">
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
