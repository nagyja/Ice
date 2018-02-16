import React, { Component } from 'react';
import Attendees from '../eventList/attendees';
import Hiring from '../eventList/hiring_companies';


// const eventItem = ({event, onEventSelect})=>{
//           <ul onClick={()=> onEventSelect(event)} className
// }
class Events extends Component {
          constructor () {
                    super()
                    this.state = {
                        going: false
                    }
          }
          RSVP(){
                    console.log('going!');
                    this.setState({
                              going: true
                    })
          }
          render(){
                    return(
                              <ul onClick = {this.RSVP.bind(this)} >
                                        <div>An event</div>
                                        <button>RSVP</button>
                                        <div className="signIn-signUp"> 
                                                  {this.state.going && <Attendees/>}
                                                  {this.state.going && <Hiring/>}                                                  
                                        </div>
                              </ul>

                    );
          }
}

export default Events;