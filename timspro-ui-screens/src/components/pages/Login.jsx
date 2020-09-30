import React from 'react'
import Logintopnav from './../common/Logintopnav'
import Image1 from './../../assests/images/loginimg.svg'
import Button from './../common/Button'


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
                <div className="text--box">
                        <form>
                            <p>Username</p>
                            <input type="text"/>
                            <p>Password</p>
                            <input type="text"/>
                        </form>
                    </div>
                <div className="login--btn--style">
                <Button
                    onClick={()=>{alert("You will be redirected to Login Page Soon!!!...")}}
                    type="button"
                    buttonStyle="btn--primary--solid">Login</Button> 
                </div>
            </div>
        </div>
        </div>

    );
}

export default Login;