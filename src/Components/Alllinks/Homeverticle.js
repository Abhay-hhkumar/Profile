import React from 'react';
import profile1 from '../../images/profile1.png';
import logo1 from '../../images/logo1.png';
import logo from '../../images/logo.png';
import {  Link} from 'react-router-dom';
import Homelinks from './Homelink/Homelinks'


export default function Homeverticle()
{  
  return (
    <>
    <div className="home">
            <div className="c1"> <img src={profile1} alt="profile"/> </div>
            
             
                   <div className="c2">    
                      <div className="c22">
                           <div className="cx">
                               <p className="f1"><b>Hi, </b> I am</p>
                               <img src={logo} alt="logo"/>
                           </div>
                        <p className="f2"><b>Abhay Kumar</b></p>
                      </div>
                   </div>

            <div className="c3">
                 <Homelinks />

                </div>

             <div className="c4"><img src={logo1} alt ="logo"/></div>
    
    </div>
     
    </>)}