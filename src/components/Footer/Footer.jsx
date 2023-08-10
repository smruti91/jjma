import React from 'react' 
import css from './Footer.module.scss';
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';

import { AiOutlineFacebook, AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube } from "react-icons/ai"
const Footer = () => {
  return (
    
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}> 
    <a className="anchor" id="footer"></a>
        <motion.div 
        variants={footerVariants}
        className={`flexCenter ${css.container}`}>
            <div className={css.left}>
            <p class="copyright-text mb-0">Copyright © 2023 JJMA | FPO - All Rights Reserved.

            </p>
            </div>
            <div className={css.right}>
              <div className={css.menu}>
                <li><AiOutlineFacebook size={"30px"} /> </li>
                <li><AiOutlineTwitter size={"30px"} /> </li>
                <li><AiOutlineInstagram size={"30px"} /> </li>
                <li><AiOutlineYoutube size={"30px"} /> </li>
              </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer