import React from "react";
import css from "./Product.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Product = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="product"></a>
      <div className={`innerWidth flexCenter  ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Our Dairy Products</span>
            {/* <p style={{ marginTop: "10px" }}> Perfect digital experiences</p> */}
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </div>
        {/* imges */}

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="product-1.jpg"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="product-3.jpg"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="product-5.jpg"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Product;
