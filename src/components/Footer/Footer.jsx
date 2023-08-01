import React from 'react'
import css from './Footer.module.scss';
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';

const Footer = () => {
  return (
    
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>

        <motion.div 
        variants={footerVariants}
        className={`flexCenter innerWidth yPaddings ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">
                    Let's make something <br/> amazing together
                </span>
                <span className={`primaryText ${css.hi}`}>
                   Start by <a href="mailto:sssmruti08@gmail.com">saying hi</a>
                </span>
            </div>
            <div className={css.right}>
              <div className={css.info}>
                <span className="secondaryText">Information</span>
                <p>688 Laxmisgar,Bhubaneswar ,Odisha</p>
              </div>
              <div className={css.menu}>
                <li>Services</li>
                <li>Work</li>
                <li>Notes</li>
                <li>Employees</li>
              </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer