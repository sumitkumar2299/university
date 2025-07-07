import React from 'react'
import DonateModal from '../Components/Donate'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <DonateModal/>
    <Outlet/>
    </>
  )
}

export default Layout