import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'


const Hero = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
        <motion.div 
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{once:false,amount:0.25}}
        className={`innerWidth ${css.container}`}>
            {/* Upper case element */}
            <div className={css.upperElement}>
            <motion.span
            variants={fadeIn("right","tween",0.2,1)} 

             className='primaryText'>
                    jjma conetnt
                </motion.span>
                <motion.span 
                variants={fadeIn("left","tween",0.4,1)} 
                className='secondaryText'>
                
                    love What we do
                </motion.span>
            </div>
             {/* person image */}
            <motion.div 
            variants={fadeIn("up","tween",0.5,1)} 
            className={css.person}>
                <motion.img 
                variants={slideIn("up","tween",0.5,1.3)} 
                style={{width:'70%'}} src="img/milk_bottle.png" alt="person" />
            </motion.div>
             {/* email */}
             <div className={css.email}>
                <a href="mailto:sssmruti08@gmail.com">sssmruti08@gmail.com</a>
             </div>
             {/* Lower case element */}
            <div className={css.lowerElement}>
               <motion.div 
               variants={fadeIn("right","tween",0.3,1)} 
               className={css.experience}>
                   <div className="primaryText">10</div>
                   <div className="secondaryText">
                      <div>
                        Years
                      </div>
                      <div>
                        Experience
                      </div>
                   </div>
               </motion.div>
               <motion.div 
               variants={fadeIn("left","tween",0.5,1)} 
               className={css.certificate}>
                <img src="./certificate.png" alt="certificate" />
                <span>CERTIFIED PROFATIONAL</span>
                <span>UI/UX DESIGNER</span>
               </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero