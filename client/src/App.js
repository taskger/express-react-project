  import React, { useState, useEffect } from 'react';
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
  import Axios from 'axios';
  import Swal from 'sweetalert2';


  import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'

  const App = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [regisDate, setRegisDate] = useState('');

    const Alertdate = () => {
      Swal.fire({
        text: "ยังไม่ถึงเวลาเพิ่มรายวิชา",
        icon: "error"
      });
    }

    useEffect(() => {
      Axios.get(`http://localhost:3000/user/readregis`)
        .then(response => {
          const startDate = new Date(response.data.results[0].startdate);
          const endDate = new Date(response.data.results[0].enddate);

          startDate.setDate(startDate.getDate() + 1);
          endDate.setDate(endDate.getDate() + 1);

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
    }, []);


  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/" element={<Home />} />
          <Route path="/admin/schedule" element={<Schedule />} />
          <Route path="/admin/course" element={<Course />} />
          <Route path="/admin/registration" element={<Registration />} />
          <Route path="/admin/confirm" element={<Confirm />} />
          <Route path="/user/" element={<Userhome />} />
          <Route path="/user/schedule" element={<Userschedule />} />
          
          {regisDate >= startDate && regisDate <= endDate ? (
            <Route path="/user/addcourse" element={<Useraddcourse />} />
          ) : ( 
            <Route path="*" element={
              <>
                <Navigate to="/user/" />
                <Alertdate />
              </>
            }/>
          )}
    
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;