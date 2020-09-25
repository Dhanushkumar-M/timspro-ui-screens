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
                         <img src={item.icon} />
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