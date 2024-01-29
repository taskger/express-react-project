import React from 'react';
import './login.css';

const LoginForm = () => {
  return (
    <form action="/login" method="post" className="login-form">
      <h3 className="login-form-title">ระบบจัดตารางสอน</h3>

      <label htmlFor="username" className="login-form-label">
        บัญชีผู้ใช้
      </label>
      <input type="text" id="username" name="username" required className="login-form-input" />

      <label htmlFor="password" className="login-form-label">
        รหัสผ่าน
      </label>
      <input type="password" id="password" name="password" required className="login-form-input" />

      <input type="submit" value="เข้าสู่ระบบ" className="login-form-submit" />

      <div className="login-form-help">
        <p>มีข้อซักถามหรือต้องการความช่วยเหลือ?</p>
      </div>
    </form>
  );
};

export default LoginForm;