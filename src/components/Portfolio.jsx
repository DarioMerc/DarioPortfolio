import React from "react";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div className="flex items-center justify-center py-5">
        <div className="border-solid border-2 w-2/6 p-3">
          <img className="mx-auto" src="https://via.placeholder.com/150" />
          <p className="text-2xl font-extrabold">Project</p>
          <div className="flex justify-center pt-3">
            <p className="px-1 mx-1 border-solid border-2 border-white">Tool</p>
            <p className="px-1 mx-1 border-solid border-2 border-white">Tool</p>
            <p className="px-1 mx-1 border-solid border-2 border-white">Tool</p>
            <p className="px-1 mx-1 border-solid border-2 border-white">Tool</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
