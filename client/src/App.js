import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Schedule from './components/Admin/Schedule/schedule';
import Course from './components/Admin/Course/course';
import Registration from './components/Admin/Registration/registration';
import Confirm from './components/Admin/Confirm/confirm';
import Userhome from './components/User/Home/home';
import Userschedule from './components/User/Schedule/schedule';
import Useraddcourse from './components/User/Addcourse/addcourse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Swal from 'sweetalert2';

import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [regisDate, setRegisDate] = useState('');

  const Alertdate = () => {
      Swal.fire({
        text: "ยังไม่ถึงเวลาเพิ่มรายวิชา",
        icon: "warning"
      });
  }
  const Alertrole = () => {
    Swal.fire({
      text: "ขออภัย คุณไม่มีสิทธิ์เข้าถึง",
      icon: "warning"
    });
  }
  const AlertManual = () => {
    Swal.fire({
      title: "คำเตือนก่อนใช้งาน",
      icon: "warning",
      html: `
      เว็บไซต์นี้ User จะเข้าสู่ระบบผ่าน GOOGLE ซึ่งจะเก็บข้อมูล ชื่่อ-นามสกุล รูปโปรไฟล์จาก GOOGLE เข้า DATABASE
      <br><br>
      ถ้าไม่ต้องให้เก็บข้อมูลส่วนตัวสามารถเข้าสู่ระบบในตำแหน่งผู้จัดตาราง (Admin) เพื่อดูตัวอย่างการทำงาน
      <br>
      <b>User : admin</b>
      <br>
      <b>Pass : admin</b>
      <br>
      <br>
      สามารถอ่านรายละเอียด และดูข้อมูลเพิ่มเติมได้ที่ 
      <a href="https://github.com/taskger/express-react-project" autofocus>Github</a>
  `,
    });
  }
  const Alertcant = () => {
    Swal.fire({
      text: "ขออภัย ผู้จัดตารางไม่สามารถเพิ่มรายวิชาได้",
      icon: "warning"
    });
  }

  useEffect(() => {
    Axios.get(`https://projectschedule-server.vercel.app/user/readregis`)
      .then(response => {
        const startDate = new Date(response.data.results[0].startdate);
        const endDate = new Date(response.data.results[0].enddate);

        startDate.setDate(startDate.getDate());
        endDate.setDate(endDate.getDate());

        const fixstartDate = startDate.toISOString().split('T')[0];
        const fixendDate = endDate.toISOString().split('T')[0];

        setStartDate(fixstartDate);
        setEndDate(fixendDate);
 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    localStorage.setItem('regis', JSON.stringify({
      date:  new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]
    }));
    const regisData = JSON.parse(localStorage.getItem('regis'));
    const { date } = regisData;
    setRegisDate(date);
  }, [setRegisDate]);


  const userData = JSON.parse(localStorage.getItem('user'));
  let role = userData ? userData.role : null;
  console.log(regisDate)
  console.log(startDate)
  console.log(endDate)

  return (
    <BrowserRouter>
        <Routes>
          {role === null && (
            <>
            <Route path='/' element={
                <>
                <Login />
                <AlertManual />
                </>
              }/>
            <Route path='*' element={
              <>
                  <Navigate to="/" />
                  <Alertrole />
              </>
            }/>
            </>
            )}

            {role === "admin" && (
                <>
                    <Route path='*' element={<Navigate to="/admin/schedule" />}/>
                    <Route path='/admin/schedule' element={<Schedule />} />
                    <Route path='/admin/course' element={<Course />} />
                    <Route path='/admin/registration' element={<Registration />} />
                    <Route path='/admin/confirm' element={<Confirm />} />
                    <Route path='/user/' element={<Userhome />} />
                    <Route path='/user/schedule' element={<Userschedule />} />
                    <Route path="/user/addcourse" element={<Useraddcourse/>} />
                </>
            )}

            {(role === "user") && (
                <>
                    <Route path='/user/' element={<Userhome />} />
                    <Route path='/user/schedule' element={<Userschedule />} />
                    {(regisDate >= startDate && regisDate <= endDate) ? (
                        <Route path="/user/addcourse" element={<Useraddcourse/>} />
                    ) : (
                        <Route path="/user/addcourse" element={
                            <>
                                <Navigate to="/user" />
                                <Alertdate />
                            </>
                        }/>
                    )}
                    <Route path='*' element={
                      <>
                        <Navigate to="/user" />
                        <Alertrole />
                      </>
                    }/>
                </>
            )}
        </Routes>
    </BrowserRouter>
);
};

export default App;