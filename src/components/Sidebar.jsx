import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import StickyBox from "react-sticky-box";
import colors from "../styles/_colors.module.scss";
import "../styles/styles.scss";

const Sidebar = ({
  appRef,
  inViewAbout,
  inViewExperience,
  inViewEducation,
  inViewProjects,
  inViewContact,
}) => {
  const CVsections = [
    { id: 0, name: "About" },
    { id: 1, name: "Experience" },
    { id: 3, name: "Education" },
    { id: 4, name: "Projects" },
    { id: 5, name: "Contact" },
  ];
  const { scrollYProgress } = useScroll({ target: appRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 12,
    restDelta: 0.001,
    bounce: 1,
  });

  return (
    <StickyBox className="sticky">
      <div className="sidebar">
        <nav>
          <div>
            <h1 className="name">Dario Mercuri</h1>
            <div className="pbar-container">
              <div className="progress-bar-white"></div>
              <motion.div className="progress-bar" style={{ scaleX }} />
            </div>
          </div>

          <ul>
            {CVsections.map((section) => (
              <motion.li
                key={section.id}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                animate={{
                  scale:
                    inViewAbout && section.name === "About"
                      ? 1.5
                      : inViewExperience && section.name === "Experience"
                      ? 1.5
                      : inViewEducation && section.name === "Education"
                      ? 1.5
                      : inViewProjects && section.name === "Projects"
                      ? 1.5
                      : inViewContact && section.name === "Contact"
                      ? 1.5
                      : 1,
                }}
              >
                <motion.a
                  href={"#" + section.name}
                  transition={{ duration: 0.5 }}
                  whileHover={{ color: colors.darkAccent }}
                  animate={{
                    color:
                      inViewAbout && section.name === "About"
                        ? colors.accentColor
                        : inViewExperience && section.name === "Experience"
                        ? colors.accentColor
                        : inViewEducation && section.name === "Education"
                        ? colors.accentColor
                        : inViewProjects && section.name === "Projects"
                        ? colors.accentColor
                        : inViewContact && section.name === "Contact"
                        ? colors.accentColor
                        : "#FFFFFF",
                  }}
                >
                  {section.name}
                </motion.a>
              </motion.li>
            ))}
            <li className="links" style={{ marginBottom: ".25rem" }}>
              <div>
                <motion.a
                  whileHover={{ scale: 1.5, color: colors.accentColor }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  href="https://www.linkedin.com/in/dariomerc/"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.5, color: colors.accentColor }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  href="mailto:dario.mercuri31@gmail.com"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.5, color: colors.accentColor }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  href="https://github.com/DarioMerc"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.5, color: colors.accentColor }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  href="/assets/resume.pdf"
                  download={"Dario Mercuri Resume.pdf"}
                >
                  <FaFileAlt />
                </motion.a>
              </div>
            </li>
            <div className="copyright">
              &copy; {new Date().getFullYear()} Dario Mercuri. All rights
              reserved.
            </div>
          </ul>
        </nav>
      </div>
    </StickyBox>
  );
};

export default Sidebar;
