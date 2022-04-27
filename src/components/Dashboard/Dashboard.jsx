import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import NavBar from '../AllNavbar/NavBar'
import TabsNab from '../AllNavbar/TabsNab'
import Footer from '../Footer/Footer'

const Dashboard = () => {
  return (
    <div>
      <NavBar/>
      <TabsNab/>
      <Footer/>


      {/* <BrowserRouter>
        <NavBar />
        <TabsNab />
        <Routes>
         
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  )
}

export default Dashboard