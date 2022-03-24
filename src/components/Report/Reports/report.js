import React, { Component } from 'react';
//import axios from 'axios';
import Application from './application';
//import {API_SERVER} from '../../../const/const';
import ExportExcel from './exportExcel';
import repData from '../../../SampleData/repData';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repData: repData.filter(cd=>cd.RepCode===this.props.rep.RepCode),
            open: false
        };
        this.togglePanel = this.togglePanel.bind(this);
        //this.renderRepData();
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    
    // exportExcel=(e)=> {
    //     e.preventDefault();
    //     axios.get(API_SERVER+'api/export_report/' + this.props.rep.RepCode)
    //         .then(res => {
    //             const repData = res.data;
    //             const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    //             const fileExtension = '.xlsx';
    //             const fileName="Report_"+this.props.rep.RepCode;
    //             const ws = XLSX.utils.json_to_sheet(repData);
    //             const wb = { Sheets: { 'data': ws }, SheetNames: [this.props.rep.RepCode] };
    //             const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    //             const data = new Blob([excelBuffer], {type: fileType});
    //             FileSaver.saveAs(data, fileName + fileExtension);
            
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    // renderRepData() {
    //     axios.get(API_SERVER+'api/fetch_rep_data/' + this.props.rep.RepCode)
    //         .then(res => {
    //             const repData = res.data;
    //             this.setState({ repData });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    render() {
        return (
            <div className="Report">
                <div onClick={(e)=>this.togglePanel(e)} className='ReportHeading'>
                    {this.props.rep.RepDescription}
                    <div className="HeadSubscript">
                        <sub>Click to Expand/Contract</sub>
                    </div>
                </div>
            {this.state.open ? (
                <div className='content'>
                    <div className="panel-body">
                    {/*<button type="submit" id="btnSubmit"  className="btn btn-info"  onClick={this.exportExcel}>Export</button> */}
                        <ExportExcel RepCode={this.props.rep.RepCode} RepDescription={this.props.rep.RepDescription}/>  
                        <table className="responsive-table borderStyle">
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan="2" className="tableHeading MainHeader borderStyle">
                                        Application Monitoring Details
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="tableHeading AppHeader borderStyle">Application</th>
                                    <th scope="col" className="tableHeading StatusHeader borderStyle">Status</th>                            
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.repData.map(data=><Application rep={data} key={data.AppCode}/>)}        
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : null}
        </div>)
        ;
    }
}

export default Report;