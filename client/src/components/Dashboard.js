import React, { Component } from 'react';
import Table from './List'

class Dashboard extends Component {

  constructor( props ){
    super( props );
    this.state = {
      user_id: "",
      challenges: [{
        "id": 123,
        "days": 15,
        "completed _days": 10,
        "description": "leetcode at least 5 a day",
        "pact_id": 3
      }, {
        "id": 203,
        "days": 1,
        "completed _days": 1,
        "description": "ldrink 2L of water",
        "pact_id": null
      }, {
        "id": 390,
        "days": 12,
        "completed _days": 10,
        "description": "Apply at least 5 jobs",
        "pact_id": null
      }, {
        "id": 465,
        "days": 29,
        "completed _days": 29,
        "description": "eat salad",
        "pact_id": null
      }, {
        "id": 532,
         "days": 10,
        "completed _days": 10,
        "description": "microwave squat with weights",
        "pact_id": 2
      }],
      top6: [{
        "is_completed": false,
        "priority": 1,
        "id": 123,
        "description": "leetcode at least 5 a day",
        "pact_id": 3
      }, {
        "is_completed": false,
        "priority": 2, 
        "id": 203,
        "description": "drink 2L of water",
        "pact_id": null
      }, {
        "is_completed": true,
        "priority": 3, 
        "id": 390,
        "description": "Apply at least 5 jobs",
        "pact_id": null
      }, {
        "is_completed": false,
        "priority": 4, 
        "id": null,
        "description": "vacuum!",
        "pact_id": null
      }, {
        "is_completed": false,
        "priority": 5, 
        "id": null,
        "description": "walk to get coffee",
        "pact_id": null
      }, {
        "is_completed": false,
        "priority": 6, 
        "id": 532,
        "description": "microwave squat with weights",
        "pact_id": 2
      }]
    }
  }
  componentDidUpdate(){
    // when the user state is updated 
    // fetch the rest of the information
    this.buildTable();
  }

  componentDidMount(){
    // find user 
    // update the user state
  }

  handleClick(e) {

  }


  render(){
    return(

      <div>
        <Table />
       
    {JSON.stringify(this.state.top6)}{JSON.stringify(this.state.challenges)}

      </div>

    );
  }

}

export default Dashboard;