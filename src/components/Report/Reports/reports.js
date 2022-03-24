import React, { Component } from 'react';
//import axios from 'axios';
import '../../../Assets/reports.css';
import Report from './report';
//import {API_SERVER} from '../../../const/const';
import fetch_act_rep from '../../../SampleData/fetchActRep';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actReps:fetch_act_rep
        };
        //this.renderActReps();
    }

    // renderActReps() {
    //     axios.get(API_SERVER+'api/fetch_act_rep')
    //         .then(res => {
    //             const actReps = res.data;
    //             this.setState({ actReps });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <div id="Reports">
                {this.state.actReps.map(rep => <Report rep={rep} key={rep.RepCode}/>)}                
            </div>
        );
    }
}

export default Reports;