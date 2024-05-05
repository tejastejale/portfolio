import "./hero.scss";
import { motion } from "framer-motion";
import React from "react";
import MyComponent from "./Cb";
import { Link } from "react-scroll";

const textVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: -0.2,
    },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  initial1: {
    x: -500,
    opacity: 0,
  },
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 2,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-600%",
    opacity: 1,
    transition: {
      duration: 45,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const handleDownloadClick = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1XD5su2PntynnaOKrQcPHyYaIuO8oFzF9/view?usp=sharing";
  window.open(pdfUrl, "_blank");
};

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:tejastejale13@gmail.com";
  };

  return (
    <div>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textcon"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={textVariants}>TEJAS TEJALE</motion.h1>
            <motion.h2 variants={textVariants}>
              Frontend Developer
              <br />
              and Data Scientist
            </motion.h2>

            <motion.div
              className="buttons"
              variants={textVariants}
              initial="initial1"
              animate="animate1"
            >
              <MyComponent />
              <motion.button onClick={handleContactClick}>
                Contact Me
              </motion.button>
              <motion.button onClick={handleDownloadClick}>
                Download Resume
              </motion.button>
            </motion.div>
            <motion.div className="simg" link to="/services">
              <motion.img
                variants={textVariants}
                animate="scrollbutton"
                src="scroll.png"
              ></motion.img>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="slidetext"
          variants={sliderVariants}
          animate="animate"
          initial="initial"
        >
          Developer Analyst Tester Content Creater
        </motion.div>
        <div className="imgcon">
          <img src="/me.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
