import React from 'react';
import Threecircle from '../images/png/9.png';
/* import menu component */
import Menu from './Menu.jsx';

export default function About(){

    return(
        <>
        <Menu />
        <div className ="aboutt">
            <div className="aboutparent">
                 
                   <h3>About</h3>
                   <p className="p1">Hi, I am Abhay Kumar, a passionate Computer Science and Engineering student. I consistently delighted to learn in the field of Computer Science field and curious to work on inspiring real life general purpose project along with creative people.</p>

<p>I love solving Data Structures and Algorithms problems, I also know web technologies like HTML, CSS, Java Script, React.js, Node.js. Apart from that, I have interest to work on Game development (C++) as well as work on UX/UI in my leisure time.</p>

<p>My aim is to work on multiple projects along with creative people by take advantage of my skills. </p>
                      
                     <div className="second">
                         <div className="s1"><p>Name</p><p>Date of Birth</p><p>Address</p></div>
                         <div className=" ss2 s1"><p>: Abhay</p><p>: 20 / Aug / 2000</p><p>: Gorakhpur, India</p></div>
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

                        <div className="education">
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

                    </div>
                    <div className="achivements">
                             <p><b>ACHIEVEMENTS</b></p>
                             <ul>
                             <li><p>Winner of Chess Tournament (twice).</p></li>
                             <li><p>Certified by HackeRank in CSS, JavaScript (Intermediate) and Problem Solving.</p></li>
                             <li><p>5* on coding platform (HackerRank).</p></li>
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