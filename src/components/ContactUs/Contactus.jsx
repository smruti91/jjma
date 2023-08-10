import React from "react";
import css from "./ContactUs.module.scss";
import {
    fadeIn,
    staggerChildren,
    textVariant2,
    zoomIn,
  } from "../../utils/motion";
  import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">Contact Us </span>
        <div className={css.experiences }>
          <motion.div variants={fadeIn("left", "tween", 1, 1)} >
            <img src="img/jjma_logo.png" alt="logo" />
          </motion.div>
          <div className={css.reason}>
               <motion.div
                  variants={textVariant2}
                  className={` flexCenter ${css.exp}`}
                 
                >
                 <div className={css.info} >
                    <h2> Better yet, see you in person! </h2>
                    <p>
                    We love our customer,so feel free to visit during normal business hours.
                   </p>
                 </div>
                 <div className={css.info} >
                    <h2> JJMA | FARMER PRODUCER COMPANY LIMITED </h2>
                    <p>
                    AM-20, VSS NAGAR, BHUBANESWAR, KHURDA
                    ODISHA - 751007 
                   </p>
                   <p>
                   Email- info@jjmafpo.com 
                   </p>
                   <p>
                    +91 99370 21519 
                   </p>
                   

                 </div>
                 <div className={css.info} >
                    <h2> Hours </h2>
                    <p>
                    Open today 09:00 am – 05:00 pm
                   </p>
                 </div>

                </motion.div>
          </div>
          
          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contactus;
