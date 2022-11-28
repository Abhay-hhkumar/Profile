import React,{useState,useEffect} from 'react';
import Menu1 from './Menu1.jsx';
import Menu2 from './Menu2.jsx';

export default function Menu(){
   
      const[width,setWidth]=useState(window.innerWidth);
     
      const[check,setCheck]=useState(0);
      const handle=()=>{  
       setWidth(window.innerWidth); }

       useEffect( () => {
         window.addEventListener('resize',handle);   
         return() => {
         window.removeEventListener('resize',handle); }
         },[]);

      /*it use change background of home page */
         useEffect( ()=>{

         if(width<=800){
          setCheck(1);}

          else{
           setCheck(0);}
            },[width]);

    return (
        <>
     
         {check ? <Menu2 /> : <Menu1 />}
        </>
    );
}