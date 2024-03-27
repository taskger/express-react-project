import React from 'react'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Admin/Home/home';
import Schedule from './components/Admin/Schedule/schedule';
import Course from './components/Admin/Course/course';
import Registration from './components/Admin/Registration/registration';
import Confirm from './components/Admin/Confirm/confirm';
import Userhome from './components/User/Home/home';
import Userschedule from './components/User/Schedule/schedule';
import Useraddcourse from './components/User/Addcourse/addcourse';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const role = localStorage.getItem('role');
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      
      <Route 
        path='/admin/' 
        element={
        <>
        {role === "admin"}
        <Home/>
        </>
        }
      />

      <Route 
        path='/admin/schedule' 
        element={
        <>
        {role === "admin"}
        <Schedule/>
        </>
        }
      />

      <Route 
        path='/admin/course' 
        element={
        <>
        {role === "admin"}
        <Course/>
        </>
        }
      />

      <Route 
        path='/admin/registration' 
        element={
        <>
        {role === "admin"}
        <Registration/>
        </>
        }
      />

      <Route 
        path='/admin/confirm' 
        element={
        <>
        {role === "admin"}
        <Confirm/>
        </>
        }
      />

      <Route 
        path='/user/' 
        element={
        <>
        {role === "user"}
        <Userhome/>
        </>
        }
      />

      <Route 
        path='/user/schedule' 
        element={
        <>
        {role === "user"}
        <Userschedule/>
        </>
        }
      />

      <Route 
        path='/user/addcourse' 
        element={
        <>
        {role === "user"}
        <Useraddcourse/>
        </>
        }
      />
      
    </Routes>

    </BrowserRouter>

  )
}
export default App