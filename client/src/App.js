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


import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/admin/home' element={<Home/>}></Route>
      <Route path='/admin/schedule' element={<Schedule/>}></Route>
      <Route path='/admin/course' element={<Course/>}></Route>
      <Route path='/admin/registration' element={<Registration/>}></Route>
      <Route path='/admin/confirm' element={<Confirm/>}></Route>
      <Route path='/user/home' element={<Userhome/>}></Route>
      <Route path='/user/schedule' element={<Userschedule/>}></Route>
      <Route path='/user/addcourse' element={<Useraddcourse/>}></Route>
    </Routes>

    </BrowserRouter>

  )
}
export default App