import React from 'react';
import './login.css';

const LoginForm = () => {
  return (
    <div className="container-login">
        <div className='img-kaset'>
            <img src ="img/kaset.jpg" className="logo" alt="logo"/>
        </div>
        <div className='container-input'>
            <div className='empty'>
                <h1 className='Rabop-font'>ระบบจัดตารางสอน</h1>
            </div>
            <div className='input-all'>
                <h2 className='sec-font'>บัญชีผู้ใช้</h2>
                <input className='input-User'></input>
                <h2 className='sec-font'>รหัสผ่าน</h2>
                <input className='input-User'></input>
            </div>
            <div className='button-samak'>
                <button className='button-ssamak'>สมัครสมาชิก</button>
            </div>
            <div >
                <button className='button-login'>เข้าสู้ระบบ</button>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;