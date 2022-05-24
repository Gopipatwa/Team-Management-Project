import React from 'react'
import { BrowserRouter, Routes, } from 'react-router-dom'
import NavBar from '../AllNavbar/NavBar'
import TabsNab from '../AllNavbar/TabsNab'
import CSV1 from '../Export/CSV1'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import FileUploadServer from '../Export/FileUploadServer'
import Upload from '../Export/Upload'
import UploadFileServer from '../Export/UploadFileServer'

const Dashboard = () => {

  const navigate = useNavigate();
  // let history = useHistory();

  // const goHome = () => {
  //   history.push("/");
  // };
  return (
    <div navigate={navigate, { replace: true }}>
      <NavBar userinfo={localStorage.getItem("userdata")} />
      <TabsNab />
      {/* <h1>func upload</h1> */}
      {/* <Upload /> */}
      {/* <h1>class</h1> */}
      {/* <UploadFileServer/> */}
     {/* <FileUploadServer/> */}
      <Footer />
      {/* <CSV1/> */}
      {/* {
        JSON.stringify(localStorage.getItem("userdata"))
      } */}
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