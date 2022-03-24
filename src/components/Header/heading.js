import React from 'react';
import { Link } from 'react-router-dom';

const Heading=(props)=>{
    let redirect;
    if(props.UserData===undefined){
        redirect= <Link to="/login">Login</Link>;
    }
    else{
        redirect= <Link to="/login">Logout</Link>;        
    }
    return(
        <div className="header">
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <Link id="position" to="/" className="brand-logo">Hel-Mon</Link>        
                    <ul id="nav-mobile" className="right hide-on-med-and-down">      
                        <li>      
                           {redirect}
                        </li>
                    </ul>
                </div>                     
            </nav>
        </div>
     );
}

export default Heading;