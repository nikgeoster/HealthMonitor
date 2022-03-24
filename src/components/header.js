import React from 'react';

function Header(){
    const styleObj = {
        fontSize: 14,
        backgroundColor: "#D71921",
        textAlign: "center",
        paddingLeft: "1vw",
    }
    return(
    <nav className="nav-extended" style={styleObj}>
        <div className="nav-wrapper" style={styleObj}>
            <a href="/" className="brand-logo">Hel-Mon</a>        
            <ul id="nav-mobile" className="right hide-on-med-and-down">      
                <li><a href="login.html">Login</a></li>
            </ul>
        </div>        
    </nav>
  );
}

export default Header;
