import React, { Component } from 'react';
import SubApplication from './subApplication';

class Application extends Component {    
    renderClass(param) {
        switch(param) {
            case '01':
                return 'borderStyle ResultColorGreen';
            case '02':
            case '03':
                return 'borderStyle ResultColorYellow';            
            default:
                return 'borderStyle ResultColorWhite';
        }   
    }
    render() {  
        return (
            <tr>
                <td className="borderStyle">
                    <p className="flow-text leftAlign">{this.props.rep.AppDescription}</p>                    
                </td>
                <td className={this.renderClass(this.props.rep.Status)}>                                                                        
                    <SubApplication header={this.props.rep.Response} AppCode={this.props.rep.AppCode}/>
                </td>
            </tr>
        );                            
    }
}

export default Application;