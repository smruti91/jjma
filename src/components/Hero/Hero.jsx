import React from 'react'
import css from './Hero.module.scss'


const Hero = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
            {/* Upper case element */}
            <div className={css.upperElement}>
            <span className='primaryText'>
                    Hay there,<br /> I am Smruti
                </span>
                <span className='secondaryText'>
                    I design butifull simple <br/>
                    I love What i do
                </span>
            </div>
             {/* person image */}
            <div className={css.person}>
                <img style={{width:'70%'}} src="person2.png" alt="person" />
            </div>
             {/* email */}
             <div className={css.email}>
                <a href="mailto:sssmruti08@gmail.com">sssmruti08@gmail.com</a>
             </div>
             {/* Lower case element */}
            <div className={css.lowerElement}>
               <div className={css.experience}>
                   <div className="primaryText">10</div>
                   <div className="secondaryText">
                      <div>
                        Years
                      </div>
                      <div>
                        Experience
                      </div>
                   </div>
               </div>
               <div className={css.certificate}>
                <img src="./certificate.png" alt="certificate" />
                <span>CERTIFIED PROFATIONAL</span>
                <span>UI/UX DESIGNER</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Hero