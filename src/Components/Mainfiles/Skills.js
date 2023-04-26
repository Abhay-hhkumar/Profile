import React from 'react';
import Menunev from '../Alllinks/Menunav'
import a from '../../images/pngskills/s1.png';
import b from '../../images/pngskills/s2.png';
import Threecircle from '../../images/png/9.png';


export default function Skills(){

    return(
        <>
        
        <Menunev />
        <div className="Skillsparent">
      
             <div className="Skills">
                <h3>Skill</h3>
                <p>I have huge interest in Data Structures and Algorithms, Web Development as well as Graphic designing and UX/UI. I have done various projects also gave the expected result and still couting. While working on project I enjoy each and every process a lot form starting to end and help other people also.</p>
                <br />
                
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