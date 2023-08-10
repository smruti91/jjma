import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <div className={`${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` ${css.container}`}
      >
        
        <div className= {css.mainProduct} >
           
            <img src="img/product1.png" alt="product-banner" />
          </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className={css.person}
        >
          
          <motion.img
            variants={slideIn("up", "tween", 0.8, 1.8)}
            style={{ width: "70%" }}
            src="img/milk_bottle.png"
            alt="person"
          />
        </motion.div>
        <span className={css.heading} >  Welcome to , JJMA diary Farm <br />WOMEN FARMERS OWNED MILK & <br/>
                   AGRO COMPANY </span>
      </motion.div>
    </div>
  );
};

export default Hero;
