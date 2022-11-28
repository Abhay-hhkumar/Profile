import React from 'react';
import profile from '../images/png/1.png';
import backbox from '../images/png/2.png';
import base from '../images/png/3.png';
import logo2 from '../images/png/4.png';
import middle from '../images/png/5.png';
import topp from '../images/png/6.png';
import logo1 from '../images/png/7.png';
import {  Link} from 'react-router-dom';

export default function Home2()
{  
  return (
    <>
    <div className="home2">
        <div className="left">
           <div className="a"><img src={topp} alt="top" /></div>
           
           <div className="b"><div className="main">
               <div className="b1"><p><img className="img1" src={backbox}  alt="backbox" /> Hi, I'am</p><img className="img2" src={logo1} alt="logo" /></div>
               <div className="b2"><p>Abhay Kumar</p></div>
               <div className="b3">
   
               <div className="b3one"><img src={logo2} alt="logo2" /> </div>
               <div className="b3two">
               <div className="b3centerbox">
               
               <Link to='/about'><button><b><p>About</p></b></button></Link>
               <Link to='/skills'><button><b><p>Skills</p></b></button></Link>
               <Link to='/work'><button><b><p>Work</p></b></button></Link>
               <Link to='/contact'><button><b><p>Contact</p></b></button></Link>

              </div></div></div>
              </div></div>
            <div className="c"><img src={base} alt="base" /> </div>
        </div>
        <div className="middle"><img src={middle} alt="middle" /> </div>
        <div className="right">
          <img src={profile} alt=" profile" />
        </div>
    </div>
       
    </>
  )
}

