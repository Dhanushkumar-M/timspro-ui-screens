import React from 'react';
import Admin from './../../assests/icons/admin.svg';
import home from './../../assests/icons/home.svg';
import student from './../../assests/icons/student.svg';
import exam from './../../assests/icons/exam.svg';
import report from './../../assests/icons/report.svg';
import logout from './../../assests/icons/logout.svg';



export const SidebarData = [
  {
    title: 'Admin',
    path: '/admin',
    icon: Admin,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/home',
    icon: home,
    cName: 'nav-text',
  },
  {
    title: 'Student',
    path: '/students',
    icon: student,
    cName: 'nav-text'
  },
  {
    title: 'Exam',
    path: '/exam',
    icon: exam,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/reports',
    icon: report,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: logout,
    cName: 'nav-text-bottom'
  }
  
];