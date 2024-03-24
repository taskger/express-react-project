import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import "./registration.css"; // Import the external CSS file

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
            <form>
            <div className="row">
              <div className="col">
                <label htmlFor="startdate" className="login-form-label">
                  วันเริ่มการลงทะเบียน
                </label>
                <input type="date" id="startdate" name="startdate" required className="login-form-input" 
                  onChange={handleStartDateChange} />
              </div>
              <div className="col">
                <label htmlFor="enddate" className="login-form-label">
                  วันสิ้นสุดการลงทะเบียน
                </label>
                <input type="date" id="enddate" name="enddate" required className="login-form-input" 
                onChange={handleEndDateChange}/>
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
