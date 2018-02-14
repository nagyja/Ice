import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Routes
import LandingPage from './containers/landing_page';
import HomePage from './containers/home';
import PeopleList from './containers/home/people_list';
import EventList from './containers/home/events_list';
import Profile from './containers/home/profile';


const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/home/profile" component={Profile} />
                    <Route path="/home/events_list" component={EventList} />
                    <Route path="/home/people_list" component={PeopleList} />
                    <Route path="/home" component={HomePage} />                    
                    <Route path="/" component={LandingPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;