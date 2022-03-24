import React, { Component } from 'react';
import axios from 'axios';
import {API_SERVER} from '../../../const/const';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedItem:null,
            selectedUpd:null,
            selectedStat:null,
            submitDisabled: true
        };
        this.renderOptions();
    }
    renderOptions() {
        axios.get(API_SERVER+'api/fetch_options/' + this.props.User)
            .then(res => {
                const options = res.data;
                this.setState({ options });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeOption=(e) =>{         
        let optValid = e.target.value>0 ? true : false;      
        let submitValid = this.state.selectedUpd && optValid && this.state.selectedStat;
        this.setState({
            selectedItem: e.target.value, 
            submitDisabled: !submitValid
        });
    }

    handleChangeStatus=(e) =>{         
        let statValid = e.target.value>0 ? true : false; 
        let submitValid = this.state.selectedUpd && statValid && this.state.selectedItem;
        this.setState({
            selectedStat: e.target.value, 
            submitDisabled: !submitValid
        });
    }

    handleChangeUpdate=(e) =>{         
        let updValid = e.target.value ? true : false; 
        let submitValid = this.state.selectedItem && updValid && this.state.selectedStat;
        this.setState({
            selectedUpd: e.target.value, 
            submitDisabled: !submitValid
        });
    }

    submitUpdate=(e)=> {
        e.preventDefault();
        axios.post(API_SERVER+'api/submit_update/'+this.props.User+'/' + this.state.selectedItem+'/'+this.state.selectedUpd+'/'+this.state.selectedStat)
            .then(res => {
                const result = res.data; 
                if(result && result>0){
                    alert('Data Updated Successfully');       
                }
                else{
                    alert('Error Updating Data');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
     }

    render() {
        if(this.state.options.length>0){
            let options = this.state.options;
            let optionItems = options.map((opt) =>                    
                    <option  key={opt.AppCode+opt.SubAppCode} value={opt.AppCode+opt.SubAppCode}                    
                    >
                        {opt.SubAppDescription}
                    </option>
            );
            return (
                <div className="OptionsFound">
                    <form>
                        <h4><b>Kindly Choose the Application and enter the status</b></h4>
                        <label>Application:</label>
                        <select id="selOpt" className="form-control" onChange={this.handleChangeOption}>
                            <option key="0">--Select--</option>
                        {optionItems}             
                        </select>
                        <br/>
                        <label>Status:</label>
                        <select id="selSt" className="form-control" onChange={this.handleChangeStatus}>
                            <option key="0" value="0">--Select--</option>
                            <option key="01" value="01">Good</option>
                            <option key="02" value="02">Warning</option>
                            <option key="03" value="03">Error</option>
                        </select>
                        <br/>
                        <label>Update:</label>
                        <textarea id="txtUpdate"  onChange={this.handleChangeUpdate} rows="6" cols="6" className="txtArea" type="text" maxLength="1000" required ></textarea>
                        <button type="submit" id="btnSubmit" disabled={this.state.submitDisabled} onClick={this.submitUpdate}>Update</button>
                    </form>
                </div>
            );
        }
        else{
            return(
                <div className="OptionsNotFound">
                    There is no data available for the user  { this.props.User}                    
                </div>
            );
        }
    }
}

export default Options;