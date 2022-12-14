import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5 pt-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-wrap justify-center gap-2 text-xl">
          <a
            href="https://www.linkedin.com/in/dariomerc/"
            className="px-5 font-semibold inline-flex items-center space-x-2 text-white transition duration-500"
          >
            <FaLinkedin className="mr-1" />
            LinkedIn
          </a>
          <a
            href="mailto:dario.mercuri31@gmail.com"
            className="px-5 font-semibold inline-flex items-center space-x-2 text-white transition duration-500"
          >
            <FaEnvelope className="mr-1" />
            Email
          </a>
          <a
            href="https://github.com/DarioMerc"
            className="px-5 font-semibold inline-flex items-center space-x-2 text-white transition duration-500"
          >
            <FaGithub className="mr-1" />
            GitHub
          </a>
        </div>
      </div>
      <p className="pt-4 pb-0 text-sm">
        &copy; {new Date().getFullYear()} Dario Mercuri. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
