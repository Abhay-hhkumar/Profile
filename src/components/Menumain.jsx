import React from "react";
import {  Link} from 'react-router-dom';

export default function Menumain(props){

    return(
    <>

        <Link to='/home'>    <button onClick={props.hand}> <p> Home    </p>    </button>   </Link>
        <Link to='/about'>   <button onClick={props.hand}> <p> About   </p>    </button>   </Link>
        <Link to='/skills'>  <button onClick={props.hand}> <p> Skills  </p>    </button>   </Link>
        <Link to='/work'>    <button onClick={props.hand}> <p> Work    </p>    </button>   </Link>
        <Link to='/contact'> <button onClick={props.hand}> <p> Contact </p>    </button>   </Link>
    </>
    )
}