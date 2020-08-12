import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import ActivityModel from "./model.js";
import axios from "axios";

class UserInfo extends React.Component{
  constructor(props){
    super(props);
   this.state={
       isModelOpen:undefined
   }
  }
/*   componentDidMount=()=>{

    axios
				.get(
					`https://drive.google.com/open?id=1xZa3UoXZ3uj2j0Q7653iBp1NrT0gKj0Y`
				)
				.then(res => {
          debugger;
					console.log(res.data);
				})
				.catch(e => console.log(e));
  } */
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
})

export default  connect(mapStateToProp, null)(UserInfo);
