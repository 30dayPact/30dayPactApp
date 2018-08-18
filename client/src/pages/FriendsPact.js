import React, { Component } from react;

class FriendsPact extends Component {
  constructor( props ){
    super( props );
    this.state = {
      key: value,
      somestuff: stuff
    }
  }
  // methods
  componentDidMount() {
   /*  using the page url, fetch users
   update which users are using this page. 
   */
   //let path = this.props.match.url
   
   /*once the state (users) are updated 
    // fetch their pact progress
    ** use Promise
    */
  }
  componentDidUpdate() {
    /* Once the states are all updated 
    update charts, etc
    */
  }
  render(){
    return(
      <div>FriendsPact</div>
    )
  }
}

export default FriendsPact;