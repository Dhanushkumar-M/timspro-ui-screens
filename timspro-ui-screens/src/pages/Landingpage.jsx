import React from 'react';
import LpTopNav from '../components/LpTopNav';
// import Image from './../Assets/BgImage'

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