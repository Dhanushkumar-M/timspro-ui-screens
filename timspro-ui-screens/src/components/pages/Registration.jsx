import React from 'react'
import Registrationtopnav from '../common/Registrationtopnav'
import Image2 from './../../assests/images/registrationimg.svg'
import Button from './../common/Button'
import {Input as TextInput} from './../common/Input'


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
                    <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Institute Approval No."/>
                    </div>
                    <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Proprietor's DOB"/>
                    </div>
                    <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter your Email"/>
                    </div>
                    </div>
                <div class='column'>
                <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Institute Name"/>
                    </div>
                    <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Institute Address"/>
                    </div>
                    <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Proprietor's Mobile No."/>
                    </div>
                </div>
                <div class='column'>
                <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter Proprietor Name"/>
                    </div>
                    <div className='column'>
                    <div className="city--state--box">
                        <TextInput className="city--state--box" placeholder="City"/>
                        <TextInput className="city--state--box" placeholder="State"/>
                    </div>
                    </div>
                    {/* Photo Upload Field */}
                    {/* <div className="text--box">
                        <TextInput className="text--box" placeholder="Enter your Email"/>
                    </div> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Registration;