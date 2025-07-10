

import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPresentation from '../Pages/Landing/LandingPresentation'
import About from '../Pages/About/About'
import ContactUs from '../Pages/About/Contactus'
import Contributors from '../Pages/Contributions/Contribution'
import Login from '../Pages/Auth/Login'
import Registration from '../Pages/Auth/Registration'
import ForgotPassword from '../Pages/Auth/ForgotPassword'
import Error from '../Pages/Status/Error'


function Landing_pageRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPresentation/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/about/contactus' element ={<ContactUs/>}/>
      <Route path='/contributor' element = {<Contributors/>}/>
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/registration" element={<Registration />} />
      <Route path="/admin/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/admin/ForgotPassword" element={<ForgotPassword />} />
      <Route path='/admin/ForgotPassword/:id' element = {<ForgotPassword/>}/>
      <Route path="*" element={<Error />} />


    </Routes>
  
    </>
  )
}

export default Landing_pageRoutes