import React from 'react';
import W1 from '../images/png/w1.jpg';
import W2 from '../images/png/w2.jpg';
import W3 from '../images/png/w3.jpg';
import Menu from './Menu.jsx';

 export default function Work(){

    return(
        <>
         <Menu />
          <div className="workparent">      
             <div className="parent">
                 <div className="first">
                 <h3>Projects and Works </h3>
                 <p>A small gallery of recent projects chosen by me. I've done them them together with amazing creative people. It's only few compared to the entire list. Interested to see some more? Visit my github page.</p>
                 </div>

             <div className="second">
                     <a href="https://abhay-hhkumar.github.io/ux-ui/" target="_blank" >
                         <div className="imageparentbox">
                             <div className="textparent">
                                 <p><b>01</b></p>
                                 <p>UX/UI</p>
                                 <p>(Sep 2022 - Present)</p>
                                 <button><p>Open</p></button>
                             </div> 
    
                             <div className="imagebox">
                                 <img src={W1} alt="W1 " />
                             </div>
                         </div>
                     </a>

            <a href="" target="_blank">
                 <div className="imageparentbox">
                     <div className="textparent">
                     <p><b>02</b></p>
                     <p>Portfolio</p>
                     <p>(Oct 2022 - Present)</p>
                     <button><p>Open</p></button>
                     </div>
                     <div className="imagebox">
                     <img src={W2} alt="W1 " />
                     </div>
            </div></a>

            <a href="https://abhay-hhkumar.github.io/Graphics/" target="_blank">
                 <div className="imageparentbox">
                     <div className="textparent">
                         <p><b>03</b></p>
                         <p>Graphic designing</p>
                         <p>(March 2020 - June 2021)</p>
                         <button><p>Open</p></button>
                     </div>
                <div className="imagebox">
                    <img src={W3} alt="W1 " />
             </div></div></a>              
            </div>
            </div>
            
             <div className="last">
                  <hr></hr>
                  <div className="circlebox">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  </div>
             </div>           
          </div>            
        </>
    )
 }