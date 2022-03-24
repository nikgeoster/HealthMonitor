import React,{Component} from 'react';
// import axios from 'axios';
// import API_SERVER from '../../../const/const';
import fetch_act_rep from '../../../SampleData/fetchActRep';


class Links extends Component{
    constructor(props){
        super(props);
        this.state = {
            linkData:fetch_act_rep
        };
        this.renderLinks();
    }
    
    // renderLinks(){
    //     axios.get(API_SERVER+'api/fetch_links')
    //         .then(res=>{
    //             const linkData=res.data;
    //             this.setState({linkData});
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }   

    render(){    
        return(
            <ul class="nav nav-pills nav-fill" id="HelMon">
                {this.state.linkData.map(link=><LinkCreator li={link} key={link.RepCode}/>)}                      
            </ul>                                
        );
    }
}

class LinkCreator extends Component{
    render(){
        switch(this.props.li.Active){
            case 'Y':
                return(<li className="nav-item nav-link"><a href={`#${this.props.li.RepCode}`}  data-toggle="tab">{this.props.li.RepDescription}</a></li>);                
            case 'N':
                return(<li className="nav-item nav-link disabled"><a>{this.props.li.RepDescription}</a></li>);                  
            default:
                return;                
        }            
    }
}

export default Links;