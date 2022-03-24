import React, { Component } from 'react';
// import axios from 'axios';
// import {history} from '../../App';
// import {API_SERVER} from '../../const/const';
// import crypto from 'crypto';
// const algorithm = 'aes-256-cbc';
// const key = "q2S4cwFn";

// function encrypt(text){
//     var cipher = crypto.Cipher(algorithm,key)
//     var crypted = cipher.update(text,'utf8','hex')
//     crypted += cipher.final('hex');
//     return crypted; 
// }

export class Login extends Component {
    constructor(){
        super();
        this.state = ({
          userName: '',
          password: '',
          submitDisabled: true
        });
    }
    
    handleChangeUName=(e) =>{         
      let uNameValid = e.target.value ? true : false;        
      let submitValid = this.state.password && uNameValid;  
      this.setState({
        userName: e.target.value,
        submitDisabled: !submitValid
      });
    }

    handleChangePwd=(e) =>{         
      let pwdValid = e.target.value ? true : false;       
      let submitValid = this.state.userName && pwdValid;
      this.setState({
        password: e.target.value, 
        submitDisabled: !submitValid
      });
    }

  //   checkUser=(e)=> {
  //     e.preventDefault();
  //     axios.get(API_SERVER+'api/chk_user/' + this.state.userName+'/'+encrypt(this.state.password))
  //         .then(res => {
  //             const userData = res.data;              
  //             if(userData){                              
  //               if(userData.Message==="User is In-Active"|| 
  //                 userData.Message==="Password is Incorrect"||
  //                 userData.Message==="User Does Not Exist"){
  //                   alert(userData.Message);                  
  //               }
  //               else if(userData.Message==="Good"){
  //                 history.push({
  //                   pathname: '/input',                    
  //                   state:  userData 
  //                 })                          
  //               }
  //               else{
  //                 alert("Error occurred. Try Again Later");
  //               }
  //             }
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  //  }

    render(){ 
        return(           
          <form className="loginForm">
              <h2 id="loginHeader"><b><u>Login</u></b></h2>
              <div>
                  <input type="text" id="nameInput" placeholder="Enter User Name" onChange={this.handleChangeUName} value={this.state.userName} />
              </div>
              <div>
                  <input type="password" id="pwdInput" placeholder="Enter Password" onChange={this.handleChangePwd}  value={this.state.password}/>
              </div>
              <button type="submit" id="btnSubmit" disabled={this.state.submitDisabled}>Submit</button>
          </form>          
        );
    }
}

export default Login;