import React from 'react';
import Heading from '../Header/heading';
import {history} from '../../App';
import Content from './content';

const Input=props=>{
    if(props.location.state===undefined){
        alert("User Profile Not loaded. Kindly login");    
        history.push('/login');
        return null;
    }
    else{
        return(
            <div>
                <Heading UserData={props.location.state}/>   
                <div>
                    <Content UserData={props.location.state}/>
                </div>             
            </div>
        );
    }
};

export default Input;