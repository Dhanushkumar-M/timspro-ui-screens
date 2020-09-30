import React from 'react'
import Registrationtopnav from '../common/Registrationtopnav'
import Image2 from './../../assests/images/registrationimg.svg'
import Button from './../common/Button'

function Registration(){
    return(
        <div>
            <div>
                <Registrationtopnav/>
            </div>
            <div>
            <img src={Image2} alt="Registration Image" className="Image"/>
            <div class='column--wrapper'>
                <div class='row'>
                    <div class='column'>
                             <h1>Column 1</h1>
                    </div>
                <div class='column'>
                       <h1>Column Two</h1>
                </div>
                <div class='column'>
                        <h1>Column 3</h1>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Registration;