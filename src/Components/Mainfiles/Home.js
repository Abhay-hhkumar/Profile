import React,{useState,useEffect} from 'react';
import Homehorizontal from '../Alllinks/Homehorizontal';
import Homeverticle from '../Alllinks/Homeverticle';

function Home(){
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
        { check ? <Homeverticle /> : <Homehorizontal />  }
        </>
    )
}
export default Home;