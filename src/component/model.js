import React from 'react';
import Modal from 'react-modal';
import '../App.css';


class ActivityModel extends React.Component{
  constructor(props){
    super(props);
  
   
  }
  render(){
      const isModelOpen=this.props.isModelOpen;
    return (
      <div >
         <Modal
          isOpen={!!isModelOpen}
          onRequestClose={this.props.handleCloseTheModel}
          contentLabel="Example Modal"
          className="model"
        >
           {isModelOpen && <h3 className="userHeader">{isModelOpen[0].real_name} Activity</h3>}
           {isModelOpen && isModelOpen[0].activity_periods.map((val,ind)=>{
               return (
                   <div key={ind} className="ParentActivity">
                       <div>Start Time : {val.start_time}</div>
                       <div>Start Time : {val.end_time}</div>
                      
                   </div>
               )
           })}
           <button onClick={this.props.handleCloseTheModel} type="button" className="btn btn-info custombtn">Close</button>
      
        </Modal>
      </div>
    );
  }

}


export default  ActivityModel;
