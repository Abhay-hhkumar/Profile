import React,{useState} from 'react';
import Menu21 from './Menu21.jsx';
import Menu22 from './Menu22.jsx';

export default function Menu2(){

    const[nav,setNav]=useState(true);
    var hand = () => {
        setNav(!nav);
    }

    return (
        <>                  
                {nav ? <Menu21 hand={hand}/> : <Menu22 hand={hand} /> }                           
        </>
    );
}

/* pass hand() function to Menu21 and to Menu22 through props */
