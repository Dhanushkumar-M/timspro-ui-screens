import React from 'react'
import Button from './Button'
function LpTopNav(){
    return(
        <div className="LPTopNav">
          <div className="LPTopNavText">
          <Button 
                onClick={()=>{alert("You will be redirected to Registration Page Soon!!!...")}}
                type="button"
                buttonStyle="btn--outline--solid"
                >Register</Button>
          <Button 
                onClick={()=>{alert("You will be redirected to Login Page Soon!!!...")}}
                type="button"
                buttonStyle="btn--primary--solid">Login</Button> 
          </div>
        </div>
    );
}

export default LpTopNav;