import React,{useState,useEffect} from 'react';
import Home from './components/Home.jsx';
import Home2 from './components/Home2.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {

      const[width,setWidth]=useState(window.innerWidth);
      const[height,setHeight]=useState(window.innerHeight);
      const[check,setCheck]=useState(0);

       const handle=()=>{  
       setWidth(window.innerWidth);setHeight(window.innerHeight);}

       useEffect( () => {
         window.addEventListener('resize',handle);   
         return() => {
         window.removeEventListener('resize',handle); }
         },[]);

      /*it use change background of home page */
         useEffect( ()=>{

         if(height>=width)
           {
          setCheck(1);}
          else{
           setCheck(0);}


            },[width,height]);

  return (

    <>   

       
          

          <Router>
        
          <Routes>
            <Route  exact path='/' element={  check ? <Home /> : <Home2 />   }/>
            </Routes>
            
            <Routes>  
            <Route  path='/home' element={  check ? <Home /> : <Home2 />   }/>  
            </Routes>
   
            <Routes>
            <Route path='/about' element={<About />   }/>
            </Routes>
   
            <Routes>
            <Route path='/skills' element={<Skills /> }/>
            </Routes>
   
            <Routes>
            <Route path='/work' element={<Work /> }/>
            </Routes>
   
            <Routes>
            <Route path='/contact' element={<Contact />}/>
            </Routes> 
                                                                                 
          </Router>
                                                                                                    
    </>

  );
} 

export default App;

/*we have use two times 'home' */
/* first one use to open home page when we open link first time */
/* second one use when we use come bact to home page through link  height>522 && width<600*/
