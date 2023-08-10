import React from "react";
import css from "./Why.module.scss";
import { WhyJJMA } from "../../utils/data";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
    >
      <a className="anchor" id="why"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">Why Love JJMA </span>
        <div className={css.experiences }>
          <div className={css.reason}>
            {WhyJJMA.map((para, i) => {
              return (
                <motion.div
                  variants={textVariant2}
                  className={` flexCenter ${css.exp}`}
                  key={i}
                >
                  <div className={css.post}>
                    <p>{para}</p>
                    {/* <p>{exp.tenure}</p> */}
                  </div>
                  {/* <div className={css.role}>
                  
                </div> */}
                </motion.div>
              );
            })}
          </div>
          <motion.div variants={fadeIn("left", "tween", 1, 1)} className={css.sideImage}>
            <img src="img/product1.png" alt="service" />
          </motion.div>
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

export default Why;
