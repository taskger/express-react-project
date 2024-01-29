import React from 'react';
import Navbar from '../Navbar';

const Registration = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <form action="/login" method="post" className="login-form">
        <h1 className="login-form-title">กำหนดวันลงทะเบียน</h1>

        <label htmlFor="startdate" className="login-form-label">
          วันเริ่มการลงทะเบียน
        </label>
        <input type="date" id="startdate" name="startdate" required className="login-form-input" />

        <label htmlFor="enddate" className="login-form-label">
          วันสิ้นสุดการลงทะเบียน
        </label>
        <input type="date" id="enddate" name="enddate" required className="login-form-input" />

        <input type="submit" value="ยืนยัน" className="login-form-submit" />

      </form>
    </div>
  );
};

export default Registration;
