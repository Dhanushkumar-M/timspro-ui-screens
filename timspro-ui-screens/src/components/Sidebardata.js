import React from 'react';
import pic from '../assests/pic.png';

export const SidebarData = [
  {
    title: 'Admin',
    path: '/',
    icon: pic,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/reports',
   // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Student',
    path: '/products',
  //  icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Exam',
    path: '/team',
  //  icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/messages',
   // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/messages',
  //  icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text-bottom'
  }
  
];