import React from 'react'
import css from "./Breakfast.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";


const Breakfast = () => {
  return (
    <div className={`${css.wrapper}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth ${css.container}`}
    >
       <div className={css.upperElement}>
          <motion.span
          variants={fadeIn("right","tween",0.2,1)} 
           className='paddings primaryText'>
                  START YOUR DAY WITH ,<br /> JJMA FRESH & HEALTHY MILK.
              </motion.span>
              
          </div>
     <motion.div 
          variants={fadeIn("up","tween",0.5,1)} 
          className={css.person}>
              <motion.img 
              variants={slideIn("up","tween",0.8,1.8)} 
              style={{}} src="img/milk_bottle.png" alt="person" />
          </motion.div>
       
     
    </motion.div>
  </div>
  )
}

export default Breakfast