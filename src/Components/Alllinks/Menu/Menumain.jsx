import React,{useState} from "react";
import {Linkprop} from '../../Objectinfo'
import {  NavLink} from 'react-router-dom';


export default function Menumain(props){
    const [items,setItems]=useState(Linkprop);
    return(
    <>
         <nav>
         {items.map( (e) => {
            const {id, to, text} =e;
          
            return(
                <NavLink to= {to} key={id}>    <button onClick={props.hand}> <p> {text}    </p>    </button>   </NavLink>
            )})}
        </nav>
    </>
    )
}