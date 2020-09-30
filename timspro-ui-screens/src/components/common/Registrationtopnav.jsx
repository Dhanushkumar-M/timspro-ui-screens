import React from 'react'
import Button from './Button'


function Registrationtopnav(){
    return(
        <div className="Login-bg">
        <div className="registertopnav">
            <div className="registertopnavtext">
                <h1 className="logoposition">TIMS PRO</h1>
            </div>
            <div className="btn--style">
                <Button
                    onClick={()=>{alert("You will be redirected to Login Page Soon!!!...")}}
                    type="button"
                    buttonStyle="btn--Primary--solid" 
                    >Login</Button> 
            </div>
        </div>
        </div>
        

    );
}

export default Registrationtopnav;