import React from 'react'
import { BrowserRouter, Routes ,} from 'react-router-dom'
import NavBar from '../AllNavbar/NavBar'
import TabsNab from '../AllNavbar/TabsNab'
import CSV1 from '../Export/CSV1'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate= useNavigate();
  // let history = useHistory();

  // const goHome = () => {
  //   history.push("/");
  // };
  return (
    <div navigate={navigate,{replace: true}}>
      <NavBar userinfo={localStorage.getItem("userdata")}/>
      <TabsNab />
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