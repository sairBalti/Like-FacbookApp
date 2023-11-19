import React from 'react'
import Menu from "./Menu";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className=''>
        <div className='mb-[4rem]'>
            <Menu/>
        </div>
        <div>
            <Outlet />
        </div>
      
    </div>
  )
}

export default Layout;
