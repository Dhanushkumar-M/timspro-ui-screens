import React, { Component } from 'react';

import Button from './../components/Button';
export default class App extends Component {

    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    render() {

        return (
            <div className="admin">
                <h1>Admin</h1>
                <br/>
                <Button 
                onClick={()=>{alert("You Clicked Me!")}}
                type="button"
                buttonStyle="btn--outline--solid"
                >Save</Button>
                <hr></hr>
                <Button buttonStyle="btn--primary--solid">Cancel</Button>
                <hr></hr>
                <Button buttonStyle="btn--primary--outline" >Reset</Button>
                <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">Register</Button>
                <hr/>
                <Button buttonStyle="btn--primary--outline--solid" buttonSize="btn--large">Login</Button>


            </div>
        );
    }
}