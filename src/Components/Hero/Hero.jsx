import React from 'react'
import Header from '../Header/Header'
import './Hero.css' 
import hero_image from '../../assets/images/hero_image.png'
import hero_image_back from '../../assets/images/hero_image_back.png'
import heart from '../../assets/images/heart.png'
import calories from '../../assets/images/calories.png'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion';


const Hero = () => {
  const transition={type:'spring',duration:'3'}
  const mobile=window.innerWidth<=768 ?true: false;
  return (
    <div className="hero" id="home">
      <div className='hero-blur'></div>
      <div className="left-h">
        {/* <Header /> */}
        <div className="the-best-ad ">
          <motion.div 
          initial={{left: mobile? "140px":'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}} >
         </motion.div>
          <span>each and every exercise is available</span>
        </div>

        <div className="hero-text" >
         <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
         </div>
         <div>
          <span>Ideal body</span>
         </div>
         <div>
          <span>In here we will help you to and build your ideal body and live up life to fullest</span>
         </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span >
              <NumberCounter end={10} start={0} delay='4' postFix='+' />
            </span>
            <span>body part <br/> options</span>
          </div>
          <div>
            <span>
            <NumberCounter end={1199} start={1000} delay='4'postFix='+' />
            </span>
            <span>exercises <br/>options </span>
          </div>
          <div>
            {/* <span>
            <NumberCounter end={50} start={0} delay='2' postFix='+' />
            </span>
            <span>fitness <br/>Programs</span> */}
          </div>
        </div>
        {/* Hero buttons */}
        {/* <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div> */}

      </div>
      <div className="right-h">
       {/* <buuton className="btn">Join now</buuton> */}

       <motion.div 
       initial={{right:'-1rem'}}
       whileInView={{right:'4rem'}}
       transition={transition }
        className='heart-rate'>
        <img src={heart} alt='' />
         <span>Heart Rate</span><span>bpm 116</span> 
       </motion.div>
       {/* hero images */}
       <img src={hero_image} alt="athlete-image" className='hero-image'/>
       <motion.img 
       initial={{right:'11rem'}}
       whileInView={{right:'20rem'}}
       transition={transition }
       src={hero_image_back}alt="athlete-image-back" className='hero-image-back'>
        </motion.img>
        {/* calories*/}
        <motion.div
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition }
        className='calories'>
          <img src={calories} alt="" />
          <div>
          <span>Calories burned</span>
          <span>220 cal</span>
          </div>
         
        </motion.div>
        
        </div>
    </div>
  )
}

export default Hero 