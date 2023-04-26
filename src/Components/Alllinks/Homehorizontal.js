import React     from           'react';
import Homelinks from           './Homelink/Homelinks'
import profile   from           '../../images/png/1.png';
import backbox   from           '../../images/png/2.png';
import logo2     from           '../../images/png/4.png';
import middle    from           '../../images/png/5.png';
import topp      from           '../../images/png/6.png';
import logo1     from           '../../images/png/7.png';

export default function Home2()
{ return (
    <>
    <div className="home2">
        <div className="left">
           <div className="a">
             <img src={topp} alt="top" />
           </div>
           
           <div className="b">
               <div class="binside">

                  <div className="b1"><p><img className="img1" src={backbox}  alt="backbox" /> Hi, I'am</p><img className="img2" src={logo1} alt="logo" /></div>
                     <div className="b2"><p>Abhay Kumar</p></div>
                  </div>

            </div>


            <div className="c">
                <div class="cinside">

                 <div className="cleft">
                 <div class="insideabox">
                     <div class="hr"></div>
                     <div class="design">
  
                       <div class="top"></div>
                       <div class="middle"><div class="middlee"></div></div> 
                       <div class="last"><div class="lastt"></div></div>
                     </div>  
                   </div>                
                    
                 </div>
                 <div className="cright">
                  <Homelinks />
                  
                 </div>

               </div>
                 
                 

              
              </div>
              
              
            {/* <div className="c"><img src={base} alt="base" /> </div> */}
        </div>
        <div className="threemiddle"><img src={middle} alt="middle" /> </div>
        <div className="right">
          <img src={profile} alt=" profile" />
        </div>
    </div>
       
    </>
  )
}

