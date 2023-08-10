import React from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

//console.log(comments);
const People = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}

    className={` ${css.wrapper}`}>

     <motion.div 
      variants={footerVariants}
       className={` ${css.container}`}>
        {/* carousal */}
        <div className={`  ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider} >
            {
             comments.map((comment,i)=>{
              return (
                  <div className={`flexCenter ${css.comment}`} id="{comment.id}" >
                      <img src={comment.img} alt="people" />
                      {/* <p>{comment.comment}</p>
                      <div className={css.line}></div>

                      <div className={css.bio}>
                          <span>{comment.name}</span>
                          <span>{comment.post}</span>
                      </div> */}

                  </div>
              )
            })  
            }
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
