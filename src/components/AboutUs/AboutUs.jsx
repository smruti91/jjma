import React from "react";
import css from "./Aboutus.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="aboutUs"></a>
      <div className={`  flexCenter  ${css.container}`}>
        <div className={css.leftSide}>
          <div className={css.image}>
            <motion.div
              variants={fadeIn("right", "tween", 1, 1)}
              className={css.exp}
              style={{ background: "#eddd5e" }}
            >
              <img src="img/jjma_logo.png" alt="service"  style={{position: "relative",top: "26px"}}/>
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 1.2, 1)}
              className={css.exp}
              style={{ background: "#286F6C" }}
            >
              <img src="service-1.jpg" alt="service" />
            </motion.div>
          </div>
          <div className={css.image}>
            <motion.div
              variants={fadeIn("right", "tween", 1.4, 1)}
              className={css.exp}
              style={{ background: "#F26440" }}
            >
              <img src="service-2.jpg" alt="service" />
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 1.6, 1)}
              className={css.exp}
              style={{ background: "#EEC048" }}
            >
              <img src="service-3.jpg" alt="service" />
            </motion.div>
          </div>
        </div>
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText" style={{color: "#286F6C"}}>About Us ?</span>
          <br></br>
          {WhatDoIHelp.map((para, i) => {
            return (
              <p className="secondaryText" key={i}>
                {para}
              </p>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
