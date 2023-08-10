import React from 'react'
import css from "./Banner.module.scss";

const Banner = () => {
    const text1 = 'We Sell Best Dairy, \n  Products';
    const text2 = 'We Fresh Milk, \n  In Town';
  return (
    <section className={`paddings ${css.wrapper}`}>
        <div className={` ${css.container}`}>
            <div className={css.post}>
                <img src="banner-1.jpg" alt="baner1" />
                <div>
                    <p className="primaryText">{text1}</p>
                </div>
            </div>
            <div  className={css.post}>
                <img src="banner-2.jpg" alt="baner2" />
                <div>
                    <p className="primaryText">{text2}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner