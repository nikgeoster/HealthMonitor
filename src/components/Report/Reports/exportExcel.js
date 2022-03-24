import React, { Component } from 'react'  
//import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
//import {API_SERVER} from '../../../const/const';
import '../../../Assets/input.css';
import '../../../Assets/reports.css';
import repData from '../../../SampleData/repData';

export class ExportExcel extends Component {  
    constructor(props) {  
        super(props)  
        this.state = {  
                ReportData: repData.filter(cd=>cd.RepCode===this.props.RepCode),  
        }  
    }  
    // componentDidMount() {  
    //     axios.get(API_SERVER+'api/fetch_rep_data/'+this.props.RepCode).then(response => {  
    //         this.setState({  
    //             ReportData: response.data  
    //         });  
    //     });  
    // }  
    renderClass(param) {
        switch(param) {
            case '01':
                return {border: '2px',borderColor: 'black',textAlign: 'left',padding: '2px',borderSpacing: '2px',borderStyle: 'solid', backgroundColor: 'green',fontWeight: 'bold',color:'black'};
            case '02':
                return {border: '2px',borderColor: 'black',textAlign: 'left',padding: '2px',borderSpacing: '2px',borderStyle: 'solid', backgroundColor: 'yellow',fontWeight: 'bold',color:'black'};
            case '03':
                return {border: '2px',borderColor: 'black',textAlign: 'left',padding: '2px',borderSpacing: '2px',borderStyle: 'solid', backgroundColor: 'red',fontWeight: 'bold',color:'black'};           
            case 'Header':
                return {border: '2px',borderColor: 'black',textAlign: 'left',padding: '2px',borderSpacing: '2px',borderStyle: 'solid', backgroundColor: 'white',fontWeight: 'bold',color:'black'};           
            default:
                return {border: '2px',borderColor: 'black',textAlign: 'left',padding: '2px',borderSpacing: '2px',borderStyle: 'solid', backgroundColor: 'white',fontWeight: 'bold',color:'black'};
        }   
    }
    render() {  
        return(  
            <div>  
                <table id="report" className="table" style={{display:'none',border:'2px',borderColor:'Black',textAlign:'center',backgroundColor:'White',padding:'2px',borderSpacing:'5px',borderStyle:'solid'}}>  
                    <thead>                     
                        <tr>  
                            <th colSpan="2" style={{backgroundColor:'#0089cc',border:'2px',borderColor:'Black', color:'White', fontWeight:'bolder'}}>
                                {this.props.RepDescription}
                            </th>  
                        </tr> 
                        <tr>  
                            <th colSpan="2" style={{backgroundColor:'#0089cc',border:'2px',borderColor:'Black', color:'White', fontWeight:'bolder'}}>
                                Application Monitoring Details
                            </th>  
                        </tr>  
                        <tr>
                            <th scope="col" style={{backgroundColor:'#0089cc',border:'2px',borderColor:'Black', color:'White', fontWeight:'bolder'}}>Application</th>
                            <th scope="col" style={{backgroundColor:'#0089cc',border:'2px',borderColor:'Black', color:'White', fontWeight:'bolder'}}>Status</th>                            
                        </tr>
                    </thead>  
                        <tbody>              
                            {  
                                this.state.ReportData.map((p, index) => {  
                                    return(
                                        <tr key={index}>  
                                            <td style={this.renderClass("Header")}>
                                                <p className="flow-text leftAlign">{p.AppDescription}</p>                    
                                            </td>
                                            <td style={this.renderClass(p.Result)}>                                                                        
                                                <p className="flow-text leftAlign">{p.Response}</p> 
                                            </td>  
                                        </tr>  
                                    );
                                })  
                            }  
                        </tbody>  
                </table>  
                <div style={{float:'right'}}>  
                    <ReactHTMLTableToExcel className="btn btn-info" table="report" filename={this.props.RepDescription}  
                        sheet={this.props.RepCode} buttonText="Export" />  
                </div>  
            </div>  
        )  
    }  
}  
  
export default ExportExcel  