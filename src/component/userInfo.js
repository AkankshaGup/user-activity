import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import ActivityModel from "./model.js";
import {loadUserData} from "../action/action.js";

class UserInfo extends React.Component{
  constructor(props){
    super(props);
   this.state={
       isModelOpen:undefined
   }
  }
 componentDidMount=()=>{
  fetch('https://run.mocky.io/v3/87fdd204-5797-42dd-8d94-a72c5c1bc16a', {
    method: 'get',
    header: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(response => {
      this.props.dispatch(loadUserData(response));
    })
  } 
  userActivityInfo=(id)=>{
      let member=this.props.members.filter((val)=>{
           return val.id==id;
      })
  this.setState(()=>({
    isModelOpen:member
  }));
  }
  handleCloseTheModel=()=>{
    this.setState(()=>({
        isModelOpen:undefined
      })
      );
  }
  render(){
      const {ok, members}=this.props;
    return (
      <div className="App-header">
        <h3 className="userHeader"> FullThrottle Labs</h3>
          <div className="Table">
                  <div className="table-head">
                  <div className="divIndex">SNo</div>
                  <div className="divtext">User Name</div>
                  <div className="divtext">User Id</div>
              <div className="divtext">Location</div>
                  </div>
           {members.map((val,ind)=>{
           return<div key={val.id} className="table-body" onClick={()=>this.userActivityInfo(val.id)}>
                <div className="divIndex"><span>{ind+1}.</span></div>
                <div className="divtext"><span>{val.real_name}</span></div>
                <div className="divtext"><span>{val.id}</span></div>
                <div className="divtext"><span>{val.tz}</span></div>
           </div>
          
           })} 
          </div>
          <ActivityModel 
          isModelOpen={this.state.isModelOpen}
          handleCloseTheModel={this.handleCloseTheModel}
          />
      </div>
    );
  }

}


const mapStateToProp = ( {userReducer:{ok,members}} ) => ({
 ok,
 members  
});

export default  connect(mapStateToProp, null)(UserInfo);
