import React, { Component } from 'react';

class Response extends Component {    
    renderClass(param) {
        switch(param) {
            case '01':
                return 'borderStyle ResultColorGreen';
            case '02':
                return 'borderStyle ResultColorYellow';  
            case '03':
                return 'borderStyle ResultColorRed';            
            default:
                return 'borderStyle ResultColorWhite';
        }   
    }
    render() {  
        return (
            <tr>
                <td className="borderStyle lineItem">
                    <p className="flow-text leftAlign">{this.props.res.SubAppDescription}</p>                    
                </td>
                <td className={this.renderClass(this.props.res.Result)}>                                                                        
                    <p className="flow-text leftAlign">{this.props.res.Response}</p> 
                </td>
            </tr>
        );                            
    }
}

export default Response;