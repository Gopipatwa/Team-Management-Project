import './App.css';
import React from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      {/* <Navbar/>
    <TabsNav/> */}

      {/* <Login/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
