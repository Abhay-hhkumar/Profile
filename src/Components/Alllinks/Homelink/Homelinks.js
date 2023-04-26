import React,{useState} from "react";
import {Linkprop} from '../../Objectinfo.js';
import {  NavLink} from 'react-router-dom';

export default function Homelinks(){
    const [items,setItems]=useState(Linkprop);
    return(
    <>
         <nav>
         {items.map( (e) => {
            const {id, to, text} =e;
          
            return(
                <NavLink to= {to} key={id}>    <button> <p> {text}    </p>    </button>   </NavLink>
            )})}
        </nav>
    </>
    )
}