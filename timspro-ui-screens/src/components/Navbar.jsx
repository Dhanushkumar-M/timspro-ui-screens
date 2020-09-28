import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <h1 className='topnav-title'>Homepage</h1>
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
<<<<<<< HEAD:timspro-ui-screens/src/components/Navbar.js
                     {/* {item.icon} */}
                     <img src={item.icon} style={{"height":"22px"}} alt=""/>
=======
                         <img src={item.icon} />
>>>>>>> 88de8e4c52576ddd88b16542c32d8ec54e70ee46:timspro-ui-screens/src/components/Navbar.jsx
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