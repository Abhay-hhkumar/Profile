import React from 'react';
import Menumain from './Menumain';

export default function Menu22(props){
    return(
        <>
           <div className="Menu22">
           <div className="box">
                 <div className="cross"onClick={props.hand}></div>
                 <div className="boxes">
                 <Menumain />
                      
                </div>
           </div></div>
        </>
    );
}
/*Abhay kumar */