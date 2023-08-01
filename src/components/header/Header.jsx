import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter({
        menuRef,
        setMenuOpened
    })

  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow:headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                JJMA
            </div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            <ul 
              ref={menuRef}
              style = {getMenuStyles(menuOpened)}
              className={` flexCenter  ${css.menu}`} >
                <li className='flexCenter'>  
                    
                    <a href="#experties">
                    <img src="img/header-icn01.png" alt="product-icon" />
                    <span>Products</span>
                        </a> 
                </li>
                <li> 
                  
                    <a href="#work">
                    <img src="img/header-icn02.png" alt="aboutUs-icon"/>
                    <span>About Us</span>
                        
                    </a> 
                    </li>
                <li>  
                    
                    <a href="#portfolio">
                    <img src="img/header-icn06.png" alt="contactUs-icon" />
                    <span>Contact Us</span>
                        
                        
                        </a> 
                </li>
                {/* <li> <a href="#people">Testimonials</a> </li>
                <li className={`flexCenter ${css.phone}`} > 
                    <p>8249527287</p> 
                    <BiPhoneCall size={"40px"} />
                </li> */}
            </ul>
            <div className={css.menuIcon} 
               onClick={()=>setMenuOpened((prev)=>!prev)}
            >
               <BiMenuAltRight size={"40px"} />
            </div>
        </div>
    </motion.div>
  )
}

export default Header