import React from 'react';
import Home from './Components/Mainfiles/Home'
import About from './Components/Mainfiles/About'
import Skills from './Components/Mainfiles/Skills'
import Work from './Components/Mainfiles/Work'
import Contact from './Components/Mainfiles/Contact'
import './App.css';
import {HashRouter as Router, Route , Routes} from 'react-router-dom';
 function App(){
  return (
    <>
           <Router>
        
        <Routes>
          <Route  exact path='/' element={ <Home /> }/>
          </Routes>
          
          <Routes>  
          <Route  path='/home' element={  <Home />  }/>  
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

  )
 }
 export default App;