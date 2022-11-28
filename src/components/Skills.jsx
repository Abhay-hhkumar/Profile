import React from 'react';
import a from '../images/pngskills/s1.png';
import b from '../images/pngskills/s2.png';
import Threecircle from '../images/png/9.png';
import Menu from './Menu.jsx';

export default function Skills(){

    return(
        <>
        <Menu />
        <div className="Skillsparent">
      
             <div className="Skills">
                <h3>Skill</h3>
                <p>I have huge interest in Data Structures and Algorithms, Graphic designing as well as in UX/UI. I have done various projects also gave the expected result and still couting. While working on project I enjoy each and every process a lot form starting to end and help other people also.</p>
                <br></br>
                <p>Since beginning my journey as a Graphic designer I have learn a lot and I have realize that this is the field where I can give my 100% of my skills with great output. Also I am very excited to work with amazing people with creative ideas.</p>
             
                <div className="pa">
                   <div><p>Data Structure and Algorithm</p>
                   <div><hr></hr>
                   <div className="circle c1"></div>
                   </div>
                </div>
                <div><p>UX/UI</p>
                <div>
                   <hr></hr>
                   <div className="circle c2"></div>               
                </div></div>

                <div><p>Front Development</p><div><hr></hr>
                   <div className="circle c3"></div>
                </div></div>
                </div>
                <div className="last">
                   <p><b>My Stack</b></p>
                   <div className="imagebox">
                    <img  className="a" src={a} alt="" />
                    <img  className="b" src={b} alt="" />
                   </div>                              
                </div>
             </div>

            <div className="secondlast">
                <img src={Threecircle} alt="threecircle" />
             </div>

            <div className="last">
                <hr></hr>
                <div className="circlebox">
                   <div className="circle"></div>
                   <div className="circle"></div>
                   <div className="circle"></div>
                </div>
            </div>
             <hr id="lasthr"></hr>
        </div>
        </>
    );
}