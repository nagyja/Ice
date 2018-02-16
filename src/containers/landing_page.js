import React, { Component } from 'react';

class LandingPage extends Component {
    onSignInClick(){
        console.log ('this clicked');
    }

    onSignUpClick(){
        console.log ('that clicked');
    }


    render(){
        return(
            <div className='container'>
                <h1 className='col-xs-12 text-xs-center'>Austin Digital Jobs</h1>
                <h2 className='text-xs-center'>Ice-Breaker</h2>
                <button 
                    className='btn btn-primary'  
                    onClick={this.onSignInClick.bind(this)}
                    >
                    Sign In
                </button>
                             
                <button 
                    className='btn btn-primary'  
                    onClick={this.onSignUpClick.bind(this)}
                    >
                    Sign Up
                </button>
            </div>        
        );
    }
}

export default LandingPage;
