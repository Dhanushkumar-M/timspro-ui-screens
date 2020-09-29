import React from 'react';
import LpTopNav from './../common/LpTopNav';
import Image from './../../assests/images/lpimage.svg'

function Landingpage() {
    return (
      <div>
        <div>
          <LpTopNav/>
        </div>
      <img src={Image} alt="BG Image" className="Image"/>
      </div>
    );
  }

 export default Landingpage;