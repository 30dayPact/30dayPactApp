import React, { Component } from 'react';
// import Login from './Login';
import Dashbard from './Dashboard';
// 

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggiedIn: true,
      pactID: 0
    }
  }
  
  rednerMain(){
    if(this.state.isLoggiedIn === false){
      return (<div className='login-container'>you should login</div>)
    } else if(this.state.isLoggiedIn === true && this.state.pactID === 0){
      return (<div><Dashbard /></div>)
    } else if(this.state.isLoggiedIn === true && this.state.pactID !== 0) {
      return (<div className='pact-container'>pact component</div>)
    }
  }


  render(){
    return(
      <div className='main-container'>
         {JSON.stringify(this.state.isLoggiedIn)}
         {this.rednerMain()}
      </div>
    )
    
  }
}

export default Main;