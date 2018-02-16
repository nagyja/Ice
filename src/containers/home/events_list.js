import React, { Component } from 'react';
import Events from '../eventList/event_details';

    // const eventItems = props.events.map(Event => {
    //     return(
    //         <div>
    //         {!this.state.noEvents &&  <EventListItem/>: "No events currently scheduled"}
    //        </div>
    //     )
    // });

    // const eventItems = props.Events.map(Event => {
    //     return(
    //         <div>
    //         <Events/>
    //        </div>
    //     )
    // });

class EventList extends Component {
    // constructor () {
    //     super()
    //     this.state = {
    //         noEvents: true
    //     }
    // }

    // componentDidMount(){
    //     const eventCheck = Events ? this.setState({noEvents: false}) : this.setState({noEvents:true});
    // }
  
    
    render(){
        return(
            <div>
               <Events/>
            </div>
        );
    }
}

export default EventList;