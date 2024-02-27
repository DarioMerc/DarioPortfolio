import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";
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
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001,
    bounce: 1,
  });
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
                </ul>
              </nav>
            </div>
          </StickyBox>
          <div className="main-content">
            <motion.section id="About" ref={refAbout}>
              <div style={{ display: "flex" }}>
                <div>
                  <p>
                    Full-Stack Developer with roughly 2 years of experience. I
                    have experience in a variety of languages and have worked
                    for both small and large companies. I care deeply about
                    communication and organization and I am committed to
                    learning best practices.
                  </p>
                  <p>
                    Outisde of my career I have strong passions in music and
                    movies, and also enjoy developing my game.
                  </p>
                </div>
                <motion.img
                  src={portrait}
                  alt=""
                  className="portrait"
                  animate={controls}
                />
              </div>
            </motion.section>
            <hr />
            <motion.section id="Experience" ref={refExperience}>
              <h2>Experience</h2>
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
            <motion.section id="Education" ref={refEducation}>
              <h2>Education</h2>
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
            <footer className="footer">Footer</footer>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
