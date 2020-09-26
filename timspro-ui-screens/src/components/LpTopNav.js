import React from 'react'
import Image from '/React/timspro-ui-screens/timspro-ui-screens/src/necessary/BGImage.jpg'
function LpTopNav(){
    return(
        <div>
        <div className="LPTopNav">
          <div className="LPTopNavText">
            <button className="regbutton">Register</button>
            <button className="loginbutton">Login</button>
          </div>
        </div>
        <img src={Image} alt="BG Image" className="Image"/>
        </div>
    );
}

export default LpTopNav;