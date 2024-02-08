import React from 'react';
import Navbar from '../Navbar';
import "./registration.css"; // Import the external CSS file

const Registration = () => {
  return (
    <div>
      <Navbar /> 
      <div className="container registration">
      <div class="row">
        <div className="col">
            </div>
              <div className="col">
              <div class="row">
                <h1 className="login-form-title">กำหนดวันลงทะเบียน</h1>
                </div>
                <div class="row">
                <div className="col">

                <label htmlFor="startdate" className="login-form-label">
                  วันเริ่มการลงทะเบียน
                </label>
                <input type="date" id="startdate" name="startdate" required className="login-form-input" />
                </div>

                <div className="col">
                <label htmlFor="enddate" className="login-form-label">
                  วันสิ้นสุดการลงทะเบียน
                </label>
                <input type="date" id="enddate" name="enddate" required />
                </div>
                </div>
                <button type="submit" class="btn registration submit btn-primary btn-block">ยืนยัน</button>
                <button type="submit" class="btn registration cancel btn-primary btn-block">ล้างข้อมูล</button>

              </div>
            <div className="col">
            </div>
          </div>

        </div>
    </div>
  );
};

export default Registration;
