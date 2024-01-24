import React from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router';
import Header from './Header';

const Body = () => {
  
  return (
    <div className='flex'>
    <Header/>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default Body;