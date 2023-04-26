import React,{useState,useEffect} from 'react';
import Menunev from '../Alllinks/Menunav';
import {Works} from '../Objectinfo.js';
 export default function Work(){

    const [items,setItems]=useState(Works);

    return(
        <>
         <Menunev />
       
          <div className="workparent">      
             <div className="parent">
                 <div className="first">
                 <h3>Projects and Works </h3>
                 <p>A small gallery of recent projects chosen by me. I've done them them together with amazing creative people. It's only few compared to the entire list. Interested to see some more? Visit my github page.</p>
                 </div>

                 <div className="second">
         {items.map( (e) => {
            const {id, link, name,date,image,alt}=e;
          
            return(
  <a href={link} target="_blank" key={id} >
                         <div className="imageparentbox">
                             <div className="textparent">
                                 <p><b>0{id}</b></p>
                                 <p>{name}</p>
                                 <p>{date}</p>
                                 <button><p>Open</p></button>
                             </div> 
    
                             <div className="imagebox">
                                 <img src={image} alt={alt} />
                             </div>
                         </div>
                     </a>
            )})}
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


 /* NOTE: To fetch datafrom object, you need to save image in public tab and then give link address of thst image in object */



 







