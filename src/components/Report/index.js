import React,{Component} from 'react';
import Header from '../Header/index';
import Reports from './Reports/reports';

class Report extends Component
{      
    render(){
        return(   
            <div id="Application">   
                <Header/> 
                <div id="Content" className="tab-content">
                    <Reports/>
                </div>          
            </div>     
        );
    }
}

export default Report;