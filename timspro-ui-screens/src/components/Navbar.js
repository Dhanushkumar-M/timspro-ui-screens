import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import icon from './../assests/pic.png';
function Navbar() {
  return (
    <>
        <div className='navbar'>
            <h1>Homepage</h1>
        </div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
                <h1 className='nav_title'>TIMS</h1>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                     {/* {item.icon} */}
                     <img src={item.icon} style={{"height":"22px"}} alt=""/>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
         </ul>
         
        </nav>
    </>
  );
}

export default Navbar;