
import React from 'react';
import Menunev from '../Alllinks/Menunav'

import Threecircle from '../../images/png/9.png';
/* import menu component */


export default function About(){

    return(
        <>
           <Menunev />
        <div className ="aboutt">
            <div className="aboutparent">
                 
                   <h3>About</h3>
                   <p className="p1">Hi, I am Abhay Kumar, a passionate Computer Science and Engineering, final year student at MMMUT. Consistently I have been learning and working in the field of ‘Full Stack Development’ and delighted to work on inspiring real life, general purpose project along with creative people.
I have been working in this field for 3 years along with my supportable team mates in the society of college. Also, we had been leading our juniors about this field and tell them how this field work. </p>
<p className="p1">I have experience to work on multiple projects with super-amazing people. Before we move on the final output, we had done multiple discussion on each single project. I am always excited to share my knowledge to others and grab the valuable points of other people also. I have an experience easily come-out from the stressed situation. Easily convey my ideas to other and make them persuade with my ideas.</p>
<p className="p1">
I believe that I have good knowledge of ‘Full Stack Development’. I have been consistently working on it for multiple projects as well as I have good knowledge of Figma, Graphic designing and its implementation. I am also good at problem solving. </p>
<p className="p1">By working at your firm, I will gain good experience in implementing my knowledge in the real world by take advantage of my skills. 
 </p>
                      
                     <div className="second">
                         <div className="s1"><p>Name</p><p>Date of Birth</p><p>Address</p></div>
                         <div className=" ss2 s1"><p>: Abhay Kumar</p><p>: 20 / Aug / 2000</p><p>: Gorakhpur, India</p></div>
                     </div>

                     <div className="third">
                        <div className="experience">
                             <p><b>EXPERIENCE</b></p>
                             <div className="executivebox">
                             <p><b>Executive member</b> | IIChE Student Chapter at MMMUT</p>
                             <p>(July 2020 - July 2021)</p>
    
                             <ul>
                             <li><p>Done various projects on Graphic designing and UX/UI, and collaborated with talented people to create designs for both IIChE and NCC events.</p></li>                        
                             <li><p>Successfully delivered 15+ Projects with-in time constraints.</p></li>                            
                             </ul>
                             </div>

                             <div className="technicalheadbox">
                                 <p><b>Technical Head</b> | IIChE Student Chapter at MMMUT</p>
                                 <p>(July 2021 - July 2022)</p>
                                 <ul>
                                 <li><p>Successfully assigned work to juniors to be completed in time bound and help them whenever they struck anywhere. Also tell them new workable approach to solve any problem.</p></li>
                                 </ul>
                             </div>

                             <div className="nccleadbox">
                                 <p><b>NCC Lead</b> (Rank: Corporal) | National Cadet Corps </p>
                                 <p>(July 2019 – July 2022)</p>
    
                                 <ul>
                                 <li><p>Inculcate the cadets to done any task with full of zeal and complete the given task along with team in any situation. And always ready to take new task to be done.</p></li>
                                 <li><p>Inculcate the moto of NCC ( i.e Unity and Discipline)</p></li>
                                 </ul>
                             </div>
                             <div className="eveleadbox">
                                 <div className="first">
                                 <p><b>Event Lead</b> | MMMUT</p>
                                 <p>(August 2020 – August 2022) </p>

                                 <ul>
                                     <li><p>Hosted 9+ events with more than 1500+ participants.</p></li>
                                     <li><p>Best two events which help me to experience lot of things are:-</p></li>
                                 </ul>
                                 </div>

                                 <div className="second">
                                 <ol>
                                     <li><p>Mind-Be-Dazzle | (April 2021)</p></li>
                                     <ul>
                                     <li><p>Conducted successfully along with 20 team members with more than 400+ participants also get various positive response from participants side.</p></li>
                                     </ul>
                                     <li><p>Guard of Honour |  (October 2021)</p></li>
                                     <ul>
                                     <li><p>We had performed it successfully   with a full of zeal in front of Governor on the occasion of 5th Convocation at MMMUT.</p></li>
                                     </ul>
                                 </ol>
                                 </div>
                             </div>
                        </div>             

                        {/* <div className="education">
                              <p><b>EDUCATION</b></p>

                              <ul>
                                 <li><p>B.Tech in CSE |MMMUT, Gorakhpur</p></li>
                                 <li><p>(2019 - 2023)</p></li>
                                 <li><p>Grade : 6.9 CGPA</p></li>
                             </ul>

                             <ul>
                                 <li><p>Intermidiate (C.B.S.E) | Zenith Convent School, Sainik Kunj, Gorakhpur</p></li>
                                 <li><p>(2017 - 2018)</p></li>
                                 <li><p>Grade : 69.4%</p></li>
                             </ul>

                              <ul>
                                 <li><p>High School (C.B.S.E) | Kendriya Vidyalaya No. 1 AFS, Gorakhpur</p></li>
                                 <li><p>(2015 - 2016)</p></li>
                                 <li><p>Grade : 8 cgpa</p></li>
                             </ul>

                        </div> */}
                    <div className="achivements">
                             <p><b>ACHIEVEMENTS</b></p>
                             <ul>
                             <li><p>Winner of Chess Tournament (twice).</p></li>
                             <li><p>Certified by HackerRank in CSS, JavaScript and Problem Solving.</p></li>
                             <li><p>5* on Coding platform (HackerRank).</p></li>
                             </ul>
                    </div>

                    <div className="extracurricular">
                             <p><b>EXTRACURRICULAR</b></p>
                             <ul>
                             <li><p>Participate in Coding Contest.</p></li>
                             <li><p>Participated in Chess Tournament (Rank=723).</p></li>
                             <li><p>100m, 200m Race, Javelin.</p></li>
                             <li><p>Volleyball.</p></li>
                             </ul>
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
            </div>
        

           
        </>
    );
}