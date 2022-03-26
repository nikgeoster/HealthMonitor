import React, { Component } from 'react';
import axios from 'axios';
import Response from './response';
import {API_SERVER} from '../../../const/const';

class SubApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            subAppDat: []
        };
        this.togglePanel = this.togglePanel.bind(this);
       // this.renderSubAppDat();
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    renderSubAppDat() {
        axios.get(API_SERVER+'api/fetch_sub_app_res/' + this.props.AppCode)
            .then(res => {
                const subAppDat = res.data;
                this.setState({ subAppDat });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if(this.state.subAppDat.length>0){
            return (
                <div className="SubApplication">
                    <div onClick={(e)=>this.togglePanel(e)} className='SubReportHeading'>  
                        {this.props.header}                  
                        <div className="HeadSubscript">
                            <sub>Click to Expand/Contract</sub>
                        </div>
                    </div>
                {this.state.open ? (
                    <div className='subContent'>
                        <div className="panel-body">
                            <table className="responsive-table borderStyle">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="tableHeading AppHeader borderStyle">Activity</th>
                                        <th scope="col" className="tableHeading StatusHeader borderStyle">Status</th>                            
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.subAppDat.map(sub=><Response res={sub} key={sub.SubAppCode}/>)}                                                                                                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>);
        }
        else{
            return(
                <div className="SubApplication">
                    {this.props.header}                       
                </div>
            );
        }
    }
}

export default SubApplication;