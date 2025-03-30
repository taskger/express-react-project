import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';
import "./registration.css"; // Import the external CSS file
import Swal from 'sweetalert2'

const Registration = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle changes in start date
  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);
  };
  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setEndDate(selectedEndDate);
  };
  
  const reset = () => {
    const endDateInput = document.getElementById('enddate');
    const startDateInput = document.getElementById('startdate');
    startDateInput.removeAttribute('max'); 
    endDateInput.removeAttribute('min'); 
    const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
    startDateInput.setAttribute('min', today);
    endDateInput.setAttribute('min', today);

  };

  useEffect(() => {
    const endDateInput = document.getElementById('enddate');
    const startDateInput = document.getElementById('startdate');
    const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
    startDateInput.setAttribute('min', today);
    endDateInput.setAttribute('min', today);

    if (endDate) {
      startDateInput.setAttribute('max', endDate);  
    }
        
    if (startDate) {
      endDateInput.setAttribute('min', startDate);   
    }

  }, [startDate, endDate]);

  const update = () => {
    Axios.patch(`https://projectschedule-server.vercel.app/user/regis`, {
      startdate: startDate-1,
      enddate: endDate
    })
    .catch(error => {
      console.error(error);
    });
    
  }
  useEffect(() => {
    Axios.get('https://projectschedule-server.vercel.app/user/readregis')
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

  return (
    <div>
      <Navbar /> 
      <div className="container registration">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="row">
              <h1 className="login-form-title">กำหนดวันลงทะเบียน</h1>
            </div>
            <form onSubmit={update}>
            <div className="row">
              <div className="col">
                <label htmlFor="startdate" className="login-form-label">
                  วันเริ่มการลงทะเบียน
                </label>
                <input type="date" id="startdate" name="startdate" required className="login-form-input" 
                  onChange={handleStartDateChange} value={startDate}/>
              </div>
              <div className="col">
                <label htmlFor="enddate" className="login-form-label">
                  วันสิ้นสุดการลงทะเบียน
                </label>
                <input type="date" id="enddate" name="enddate" required className="login-form-input" 
                onChange={handleEndDateChange} value={endDate}/>
              </div>
            </div>
            <button type="submit" className="btn registration submit btn-primary btn-block">ยืนยัน</button>
            <button type="reset" className="btn registration cancel btn-primary btn-block" onClick={reset}>ล้างข้อมูล</button>
            </form>

          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
