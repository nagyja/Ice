import React, { Component } from 'react';
import Messenger from '../../components/peopleList/messenger';
import PeopleDetail from '../../components/peopleList/people_detail';

class PeopleList extends Component {
    render(){
        return(
             <div>
               <PeopleDetail />
               <Messenger />
            </div>
        );
    }
}

export default PeopleList;