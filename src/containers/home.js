import React, { Component } from 'react';
import EventsList from './home/events_list';
import PeopleList from './home/people_list';
import Profile from './home/profile';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            eventListHidden: true,
            peopleListHidden: true,
            profileHidden: true
        }
    }

    showEventList() {
        this.setState({
            eventListHidden: !this.state.eventListHidden,
            peopelListHidden: true,
            profileHidden: true
        })
    }

    showPeopleList() {
        this.setState({
            eventListHidden: true,
            peopleListHidden: !this.state.peopelListHidden,
            profileHidden: true
        })
    }

    showProfile() {
        this.setState({
            eventListHidden: true,
            peopleListHidden: true,
            profileHidden: !this.state.profileHidden
        })
    }

    render(){
        return(
            <div className="container">
                    <div className="row">
                        <h1 className="col-md-12 text-center">Home</h1>
                    </div>
                    <div className="row btn-group btn-group-justified">
                       
                        <button
                            className="btn btn-primary col-md-4"
                            onClick={this.showEventList.bind(this)}
                            >
                            Events
                        </button>
                        <button
                            className="btn btn-primary col-md-4"
                            onClick={this.showPeopleList.bind(this)}
                            >
                            People
                        </button>
                        <button
                            className="btn btn-primary col-md-4"
                            onClick={this.showProfile.bind(this)}
                            >
                            Profile
                        </button>

                        <div>
                            {!this.state.eventListHidden && <EventsList />}
                            {!this.state.peopleListHidden && <PeopleList />}
                            {!this.state.profileHidden && <Profile />}                   
                        </div>
                    
                    </div>
               
            </div>
        );
    }
}

export default HomePage;
