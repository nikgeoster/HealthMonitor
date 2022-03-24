import React from 'react';
import Heading from '../Header/heading';
import Login from './login';
function Header(){
    return(
        <div>
            <Heading/>    
            <div className="loginContent"> 
                <Login/>                
            </div>
        </div>
    );
};

export default Header;