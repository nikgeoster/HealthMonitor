import React, { Component } from 'react';
import '../../Assets/input.css';
import Options from './Options/option';

class Content extends Component {       
    render() {  
        return (
            <div>
                <div className="IdHeader">
                    <h4>
                        Welcome, {this.props.UserData.UserId}
                    </h4>
                </div>
                <div className="Options">
                    <Options User={this.props.UserData.UserId}/>
                </div>
            </div>
        );                            
    }
}

export default Content;