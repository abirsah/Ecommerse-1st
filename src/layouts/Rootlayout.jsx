import React from 'react'
import Navber from '../layouts/Navber'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Sidebar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout