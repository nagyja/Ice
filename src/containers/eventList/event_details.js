import React, { Component } from 'react';
import Attendees from '../eventList/attendees';
import Hiring from '../eventList/hiring_companies';

const sampleEventDetails = [
    {name: "ADJ March Maddening Meetup", date: "3.12.2018", location: "An alley or gutter, some place unemployed developers can't stink up." , note: "If you want to believe, come meet a bunch of people like you, and no one hiring"},
    {name: "The actual ADJ Meetup", date: "3.21.2018", location: "Ivory tower" , note: "This for anyone not suckered into going to that fake event"},    
];

const mappedEvents = sampleEventDetails.map((event)=>
    <ul onClick = {this.RSVP.bind(this)} >
        <h2>{event.name}</h2>
        <div>{event.note}</div>
        <div>Date: {event.date}</div>
        <div>Location: {event.location}</div>
        <button>RSVP</button>
        <div className="signIn-signUp"> 
            {this.state.going && <Attendees/>}
            {this.state.going && <Hiring/>}                                                  
        </div>
    </ul>
);

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
          //RSVP Should update database
        RSVP(){
            console.log('going!');
                this.setState({
                    going: true
            })
        }
          
          //On mount request list of events
          //componentDidMount (){
          //
         // }

        render(){
            return(
                {mappedEvents}
            );
        }
}

export default Events;