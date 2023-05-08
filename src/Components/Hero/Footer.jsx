import React from 'react'
import './Footer.css'
import Github from '../../assets/images/github.png'
import Instagram from '../../assets/images/instagram.png'
import Linkden from '../../assets/images/linkedin.png'
import herologo from '../../assets/images/herologo.png'
const Footer = () => {
  return (
    <div className="footerr">
        <hr />
        <div className="footer">
            <div className='social-links'>
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkden} alt="" />
            </div>
        
        <div className='logo-f'>
            <img src={herologo} alt="" />
        </div>
      </div>
      {/* <div className='blur f-1'></div>
        <div className='blur f-2'></div> */}
        </div>
  ); 
        
};

export default Footer
