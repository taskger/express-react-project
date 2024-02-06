import React from 'react';
import Navbar from '../Navbar';
import "./registration.css"; // Import the external CSS file

const Registration = () => {
  return (
    <div>
      <Navbar /> 
      <div className="container">
      <div class="row">
        <div className="col">
            </div>
              <div className="col">
                <h1 className="login-form-title">กำหนดวันลงทะเบียน</h1>

                <label htmlFor="startdate" className="login-form-label">
                  วันเริ่มการลงทะเบียน
                </label>
                <input type="date" id="startdate" name="startdate" required className="login-form-input" />

                <label htmlFor="enddate" className="login-form-label">
                  วันสิ้นสุดการลงทะเบียน
                </label>
                <input type="date" id="enddate" name="enddate" required />

                <button type="submit" class="btn btn-primary btn-block">ยืนยัน</button>

              </div>
            <div className="col">
            </div>
          </div>

        </div>
    </div>
  );
};

export default Registration;
