import React from 'react'
import Button from './Button'


function Logintopnav(){
    return(
        <div className="Login-bg">
        <div className="logintopnav">
            <div className="logintopnavtext">
                <h1 className="logoposition">TIMS PRO</h1>
            </div>
            <div className="btn--style">
                <Button
                    onClick={()=>{alert("You will be redirected to Registration Page Soon!!!...")}}
                    type="button"
                    buttonStyle="btn--outline--solid" 
                    >Register</Button> 
            </div>
        </div>
        </div>
        

    );
}

export default Logintopnav;