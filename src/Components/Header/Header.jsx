import React, { useState } from 'react'
import './Header.css';
import Logo from "../../assets/images/herologo.png"
import bars from "../../assets/images/bars.png"
import { Link } from 'react-scroll';

const Header = () => {
  const mobile=window.innerWidth<=768 ?true: false;
  const [menuOpened , setMenuopend]=useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="" className='logo'/>
   {(menuOpened===false && mobile===true)?(
    <div
    style={{
      backgroundColor:"var(--appColor)",
      padding:"0.5rem",
      borderRadius:"5px"
    }}
    onClick={()=>setMenuopend(true)} >
      < img src={bars} alt=""style={{width:'1.5rem',height:'1.5rem'}}/>
    </div>
   ):<ul className=  "header-menu" >
   <li>
    <Link 
    onClick={()=>setMenuopend(false)}
    activeClass='active'
      to='home'
      span={true}
      smooth={true}>Home</Link> 
    </li>
   <li>
    <Link 
   onClick={()=>setMenuopend(false)}
     to='programs'
     span={true}
     smooth={true}>Programs</Link></li>
   <li >
   <Link 
   onClick={()=>setMenuopend(false)}
     to='reasons'
     span={true}
     smooth={true}> Why us</Link></li>
      <li>
    <Link 
   onClick={()=>setMenuopend(false)}
     to='plans'
     span={true}
     smooth={true}>Plans</Link>
    </li>
 </ul>
}
    </div>
  )
};

export default Header
