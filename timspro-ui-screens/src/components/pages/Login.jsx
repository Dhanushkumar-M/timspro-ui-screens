import React from 'react'
import Logintopnav from './../common/Logintopnav'
import Image1 from './../../assests/images/loginimg.svg'
import Button from './../common/Button'
import {Input as InputText} from './../common/Input'


function Login(){
    return(
        <div>
            <div>
                <Logintopnav/>
            </div>
        <img src={Image1} alt="Login Image" className="Image"/>
        <div className="square">
            <div className="square-content">
                <h1 className="login--heading">LOGIN</h1>
                <div className="login--details--view">
                    <p>Username</p>
                </div>
                <div className="text--box">
                        <InputText className="text--box"/>
                </div>
                <div className="login--details--view">
                    <p>Password</p>
                </div>
                    <div className="text--box">
                        <InputText className="text--box"/>
                    </div>

                <div className="login--btn--style">
                <Button
                    onClick={()=>{alert("You will be redirected to Admin Page Soon!!!...")}}
                    type="button"
                    buttonStyle="btn--primary--solid">Login</Button> 
                </div>
            </div>
        </div>
        </div>

    );
}

export default Login;