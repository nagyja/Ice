import React, { Component } from 'react';

class PeopleDetail extends Component {
    render(){
        return(
            <div className="card">
                <img className="card-image-top" src={"http://lorempixel.com/100/100"} />
                <div className="card-body">
                    <h5 className="card-title">Joseph Jaffe</h5>
                    <p className="card-text">Some random info about myself. Some more random info about myself</p>
                </div>
            </div>
        );
    }
}

export default PeopleDetail;