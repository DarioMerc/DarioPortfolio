import React from "react";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div className="flex items-center justify-center py-5">
        <div className="border-solid border-2 w-1/5 py-3 px-2 mx-3">
          <img src="https://via.placeholder.com/150" />
          <p>Project</p>
        </div>
        <div className="border-solid border-2 w-1/5 py-3 px-2 mx-3">
          <img src="https://via.placeholder.com/150" />
          <p>Project</p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
