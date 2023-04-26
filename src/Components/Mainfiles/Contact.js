import React from 'react';
import Menunev from '../Alllinks/Menunav'
import A from '../../images/1.jpg';
import C from '../../images/pngskills/1.png';
import D from '../../images/pngskills/2.png';
import E from '../../images/pngskills/3.png';
import F from '../../images/pngskills/4.png';



export default function Contact(){     
   
    return(
        <>
             <Menunev />
            <div className="Contact">
                <div className="parent">                   
                     <div className="left">
                         <div className="a"><img src={A} alt="" /></div> 
                     </div>
                     <div className="right">     
                         <p id="contactheading"><b> Contact</b></p>
                         <div className="contactbox"> 
                                                                                                                                        
                                 <a href="mailto:abhaykumar1gkp@gmail.com" target="_blank">                    <button> <img src={C} alt="" /> <p><b>abhaykumar1gkp@gmail.com</b> </p>  </button>  </a>                          
                                 <a href="https://github.com/Abhay-hhkumar" target="_blank">                   <button> <img src={D} alt="" /> <p>Abhay-hhKumar                   </p>  </button>  </a>
                                 <a href="https://www.linkedin.com/in/abhay-kumar-71988a244/" target="_blank"> <button> <img src={E} alt="" /> <p>Abhay kumar                     </p>  </button>  </a>
                                 <a href="tel:956-517-2130">                                                   <button> <img src={F} alt="" /> <p>+91 9565172130                  </p>  </button>  </a>
                                                            
                         </div>
                     </div>
                 
                </div>
              
            </div>

        </>
    )
}

 /* malito:    yes it isa use to send email*/  
//  ABHAY KUMAR        