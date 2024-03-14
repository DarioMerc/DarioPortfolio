import { motion, useInView, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./components/Sidebar";
import colors from "./styles/_colors.module.scss";
import "./styles/styles.scss";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const appRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: appRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 12,
    restDelta: 0.001,
    bounce: 1,
  });

  //Refs
  const refAbout = useRef(null);
  const inViewAbout = useInView(refAbout, { margin: "-50%" });
  const refExperience = useRef(null);
  const inViewExperience = useInView(refExperience, { margin: "-50%" });
  const refEducation = useRef(null);
  const inViewEducation = useInView(refEducation, { margin: "-45%" });
  const refProjects = useRef(null);
  const inViewProjects = useInView(refProjects, { margin: "-50%" });
  const refContact = useRef(null);
  const inViewContact = useInView(refContact, { margin: "-50%" });

  return (
    <>
      {appRef && (
        <div className="app" ref={appRef}>
          {!isMobile && (
            <Sidebar
              appRef={appRef}
              inViewAbout={inViewAbout}
              inViewExperience={inViewExperience}
              inViewEducation={inViewEducation}
              inViewProjects={inViewProjects}
              inViewContact={inViewContact}
            />
          )}
          <div className="main-content">
            {isMobile && (
              <>
                <h1 className="name">Dario Mercuri</h1>
                <ul>
                  <div className="links">
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
                  </div>
                </ul>
              </>
            )}
            <div className="padded-content">
              <motion.section
                id="About"
                ref={refAbout}
                transition={{ duration: 1 }}
                animate={{
                  opacity: inViewAbout ? 1 : 0,
                  scale: inViewAbout ? 1 : 0.8,
                }}
              >
                <div className="about">
                  <div>
                    <p>
                      Full-Stack Developer with roughly 2 years of experience. I
                      have experience in a variety of languages and have worked
                      for both small and large companies. I care deeply about
                      communication and organization and I am committed to
                      learning best practices.
                    </p>
                    <p>
                      Outside of my career I enjoy making and listening to
                      music, watching movies and TV, and slowly developing a
                      video game. I also have an interest in vintage technology
                      like audio cassettes and VHS tapes. I enjoy making and
                      collecting tapes and occasionally even repairing machines!
                    </p>
                  </div>
                  <motion.img src="/Portrait.jpg" alt="" className="portrait" />
                </div>
              </motion.section>
              <hr className="divider" />
              <motion.section
                id="Experience"
                ref={refExperience}
                transition={{ duration: 1 }}
                animate={{
                  opacity: inViewExperience ? 1 : 0,
                  scale: inViewExperience ? 1 : 0.8,
                }}
              >
                <h2>Experience</h2>
                <div className="job">
                  <div className="header">
                    <div className="position">
                      Full-Stack Developer - SeeMyApps
                    </div>
                    <div className="date">(Nov 2022 - Nov 2023)</div>
                    <hr />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        Independently worked on a variety of projects
                        specializing in Ecommerce, online customer engagement,
                        and CMS services.
                      </li>
                      <li>
                        Built a prototype SASS application from the ground up in
                        Angular, .NET and MongoDB.
                      </li>
                      <li>
                        Revamped the look and feel ofmultiple company services
                        in both Ionic and Material.
                      </li>
                      <li>
                        Planned and executed the integration of a Google Actions
                        Center API into existing company software.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job">
                  <div className="header">
                    <div className="position">
                      Software Developer - MindGeek
                    </div>
                    <div className="date">(Apr 2022 - Jun 2022)</div>
                    <hr />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        Collaborated with a small agile team to develop,
                        discuss, and enhance features for multiple backend
                        services using Laravel.
                      </li>
                      <li>
                        Worked on company portals, APIs, crud pages, and
                        middleware
                      </li>
                      <li>
                        Laid off along with 125 employees following the
                        resignation of the CEO and COO.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job">
                  <div className="header">
                    <div className="position">
                      Computer Technician - Private Client
                    </div>
                    <div className="date">(May 2020 - Feb 2021)</div>
                    <hr />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        Assisted in building, managing and maintaining hundreds
                        of computers for cryptocurrency mining.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job">
                  <div className="header">
                    <div className="position">
                      Web Developer Intern - SignatureWEB
                    </div>
                    <div className="date">(Jan 2020 - Apr 2020)</div>
                    <hr />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        Worked on two client websites on a small agile team in
                        both front-end and back-end development.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>
              <hr className="divider" />
              <motion.section
                id="Education"
                ref={refEducation}
                transition={{ duration: 1 }}
                animate={{
                  opacity: inViewEducation ? 1 : 0,
                  scale: inViewEducation ? 1 : 0.8,
                }}
              >
                <h2>Education</h2>
                <div className="education">
                  <p>
                    <strong>Certificate</strong> in{" "}
                    <strong>Full Stack Development</strong> - Concordia
                    University
                  </p>
                  <p>
                    <strong>DEC</strong> in <strong>Computer Science</strong> -
                    John Abbott College
                  </p>
                  <p>
                    <strong>Loyola High School</strong>
                  </p>
                </div>
              </motion.section>
              <hr className="divider" />
              <motion.section
                id="Projects"
                ref={refProjects}
                transition={{ duration: 1 }}
                animate={{
                  opacity: inViewProjects ? 1 : 0,
                  scale: inViewProjects ? 1 : 0.8,
                }}
              >
                <h2>Projects</h2>
                <div className="project-container">
                  <motion.div
                    className="project"
                    whileHover={{
                      scale: 1.05,
                      borderColor: colors.accentColor,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img className="image" src="/mangomarket.png" alt="" />
                    <div className="info">
                      <div className="title">Mango Market</div>
                      <div className="description">
                        Fake E-Commerce site selling imported mango varieties
                        from around the world.
                      </div>
                      <div className="buttons">
                        <a href="https://mango-market-backend.onrender.com/">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Visit
                          </motion.button>
                        </a>
                        <a href="https://github.com/DarioMerc/MangoMarket">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Github
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="project"
                    whileHover={{
                      scale: 1.05,
                      borderColor: colors.accentColor,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img className="image" src="/win95.png" alt="" />
                    <div className="info">
                      <div className="title">Win95 Portfolio</div>
                      <div className="description">
                        A portfolio website made in React that is meant to
                        emulate the visual style of Windows 95!
                      </div>
                      <div className="buttons">
                        <a href="https://dariomercuri.vercel.app/">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Visit
                          </motion.button>
                        </a>
                        <a href="https://github.com/DarioMerc/Windows95Portfolio">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Github
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="project"
                    whileHover={{
                      scale: 1.05,
                      borderColor: colors.accentColor,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img className="image" src="/scopa.png" alt="" />
                    <div className="info">
                      <div className="title">Scopa Bot</div>
                      <div className="description">
                        A console version of the the Italian card game Scopa!
                      </div>
                      <div className="buttons">
                        {/* <a href="">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Visit
                          </motion.button>
                        </a> */}
                        <a href="https://github.com/DarioMerc/ScopaBot">
                          <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{
                              backgroundColor: colors.accentColor,
                              borderColor: colors.accentColor,
                              color: colors.bgColor,
                              cursor: "pointer",
                            }}
                          >
                            Github
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
              <hr className="divider" />
              <motion.section
                id="Contact"
                ref={refContact}
                transition={{ duration: 1 }}
                animate={{
                  opacity: inViewContact ? 1 : 0,
                  scale: inViewContact ? 1 : 0.8,
                }}
              >
                <h2>Contact Me</h2>
                <form
                  action="https://getform.io/f/YerJRWeO"
                  name="contact"
                  method="post"
                  autoComplete="off"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="first-name">Name</label> <br />
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label> <br />
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <div>
                    <motion.input
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        backgroundColor: colors.accentColor,
                        borderColor: colors.accentColor,
                        color: colors.bgColor,
                        cursor: "pointer",
                      }}
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </motion.section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
