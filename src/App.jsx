import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import StickyBox from "react-sticky-box";
import portrait from "./assets/Portrait.jpg";
import "./styles/styles.scss";

function App() {
  const CVsections = [
    { id: 0, name: "About" },
    { id: 1, name: "Experience" },
    { id: 3, name: "Education" },
    { id: 4, name: "Projects" },
  ];

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
  const inViewEducation = useInView(refEducation, { margin: "-50%" });
  const refProjects = useRef(null);
  const inViewProjects = useInView(refProjects, { margin: "-50%" });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <>
      {appRef && (
        <div className="app" ref={appRef}>
          <StickyBox>
            <div className="sidebar">
              <nav>
                <div>
                  <h1 className="name">Dario Mercuri</h1>
                  <div className="pbar-container">
                    <div className="progress-bar-white"></div>
                    <motion.div className="progress-bar" style={{ scaleX }} />
                  </div>
                </div>

                <ul style={{ display: "inline-block" }}>
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
                            : 1,
                      }}
                    >
                      <motion.a
                        href={"#" + section.name}
                        transition={{ duration: 0.5 }}
                        animate={{
                          color:
                            inViewAbout && section.name === "About"
                              ? "#9000FF"
                              : inViewExperience &&
                                section.name === "Experience"
                              ? "#9000FF"
                              : inViewEducation && section.name === "Education"
                              ? "#9000FF"
                              : inViewProjects && section.name === "Projects"
                              ? "#9000FF"
                              : "#FFFFFF",
                        }}
                      >
                        {section.name}
                      </motion.a>
                    </motion.li>
                  ))}
                  <li>
                    <div className="links">
                      <motion.a
                        whileHover={{ scale: 1.5, color: "#9000FF" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        href="https://www.linkedin.com/in/dariomerc/"
                      >
                        <FaLinkedin />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.5, color: "#9000FF" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        href="mailto:dario.mercuri31@gmail.com"
                      >
                        <FaEnvelope />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.5, color: "#9000FF" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        href="https://github.com/DarioMerc"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.5, color: "#9000FF" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaFileAlt />
                      </motion.a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </StickyBox>
          <div className="main-content">
            <motion.section id="About" ref={refAbout}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <p>
                    Full-Stack Developer with roughly 2 years of experience. I
                    have experience in a variety of languages and have worked
                    for both small and large companies. I care deeply about
                    communication and organization and I am committed to
                    learning best practices.
                  </p>
                  <p>
                    Outside of my career I enjoy making and listening to music,
                    watching movies and TV, and developing a video game.
                  </p>
                </div>
                <motion.img src={portrait} alt="" className="portrait" />
              </div>
            </motion.section>
            <hr />
            <motion.section
              id="Experience"
              ref={refExperience}
              style={{ scale, opacity }}
            >
              <h2>Experience</h2>
              <div className="job">
                <div className="header">
                  <div className="position">Full-Stack Developer</div>
                  <div className="date">(Nov 2022 - Nov 2023)</div>
                  <hr />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      Independently worked on a variety of projects specializing
                      in online customer engagement and CMS services for
                      businesses.
                    </li>
                    <li>
                      Built a prototype SASS application from the ground up in
                      Angular, .NET and MongoDB.
                    </li>
                    <li>
                      Revamped the look and feel ofmultiple company services in
                      both Ionic and Material.
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
                  <div className="position">Software Developer</div>
                  <div className="date">(Apr 2022 - Jun 2022)</div>
                  <hr />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      Collaborated with a small agile team to develop, discuss,
                      and enhance features for multiple backend services using
                      Laravel PHP.
                    </li>
                    <li>
                      Terminated due to a corporate layoff following the
                      resignation of the CEO and COO.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job">
                <div className="header">
                  <div className="position">Computer Technician</div>
                  <div className="date">(May 2020 - Feb 2021)</div>
                  <hr />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      Assisted in building, managing and maintaining hundreds of
                      computers for cryptocurrency mining.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job">
                <div className="header">
                  <div className="position">Web Developer Intern</div>
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
            <hr />
            <motion.section id="Education" ref={refEducation}>
              <h2>Education</h2>
              <div className="education">
                <p>
                  <strong>Certificate</strong> in{" "}
                  <strong>Full Stack Development</strong> - Concordia University
                </p>
                <p>
                  <strong>DEC</strong> in <strong>Computer Science</strong> -
                  John Abbott College
                </p>
              </div>
            </motion.section>
            <hr />
            <motion.section id="Projects" ref={refProjects}>
              <h2>Projects</h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              veritatis aliquid iste fuga saepe dolorem, inventore alias!
              Quibusdam, laborum nam dolorem ea odio sunt deserunt, doloremque
              aspernatur esse earum praesentium! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias nihil, quam debitis quis ad
              quisquam. Aut eius voluptates inventore distinctio quasi, totam
              vitae error sint repudiandae, consectetur, nostrum explicabo
              perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. In magni perferendis accusantium officiis sed enim ex optio
              dolore ea nihil illo, odio beatae voluptas et asperiores adipisci.
              Laboriosam, dolorem recusandae?
            </motion.section>
            <hr />
            <section id="Contact">
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
                  <input type="submit" value="Send" />
                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
