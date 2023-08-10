import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  getMenuStyles,
  headerVariants,
} from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={` ${css.wrapper}`}
      style={{ boxShadow: headerShadow, padding: "10px 10px" }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.8, 1.8)}
            style={{ width: "30%" }}
            src="img/jjma_logo.png"
            alt="logo"
          />
        </motion.div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={` flexCenter  ${css.menu}`}
        >
          <li className="flexCenter" >
            <a href="#product">
              <img src="img/header-icn01.png" alt="product-icon" />
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href="#aboutUs">
              <img src="img/header-icn02.png" alt="aboutUs-icon" />
              <span>About Us</span>
            </a>
          </li>
          <li>
            <a href="#why">
              <img src="img/header-icn04.png" alt="aboutUs-icon" />
              <span>Why Us</span>
            </a>
          </li>
          <li>
            <a href="#contact">
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
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={"40px"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
