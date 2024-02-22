import React from "react";
import "./login.css";
import Axios from "axios";

import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";

function LoginForm(){
    const clientId = "1012567060456-cj1br6iuqir1rnq2q0du3vb1h769ihm1.apps.googleusercontent.com";

    useEffect(() => {
        const initClient = () => {
            gapi.client.init ({
                clientID : clientId,
                scope: ''
            })
        }
        gapi.load("client:auth2", initClient)
    }, [])

    const onSuccess = (res) => {
        console.log('success',res)
    }

    const onFailure = (res) => {
        console.log('failed',res)
    }

    const [showPassword,setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [User,setUser] = useState("");
    const [password,setPassword] = useState("");
    const btnLogin = () => {
        Axios.post("http://localhost:3000/",{
            User : User,
            password : password,
        })
        .then((response) => {
            if (response.status === 200){
                const {token , redirectTo } = response.data;
                
                if (redirectTo === '/admin'){
                    window.location.href = redirectTo;
                    localStorage.setItem('role','admin');
                    localStorage.setItem('token',token);
                    localStorage.setItem('User',User);
                }
            }else {
                alert ("User หรือ Password ไม่ถูกต่้อง!!!")
            }
        })
        .catch((error) => {
            console.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ:', error);
            alert ("User หรือ Password ไม่ถูกต่้อง!!!");
        });
    };
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
                <h2 className='sec-font'>บัญชีผู้ใช้ </h2>
                <input 
                    className='input-User'
                    placeholder="ชื่อบัญชี"
                    value={User}
                    onChange={(e) => setUser(e.target.value)}
                />
                <div className='password-container'>
                    <h2 className='three-font'>รหัสผ่าน</h2>
                    <input 
                        className='input-User'
                        placeholder='รหัสผ่าน'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length > 0 && (
                        <button
                            className='show-password-button'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className='material-icons'></i> : <i className='material-icons'>visibility_off</i>}
                        </button>
                    )}
                </div>
                <h1 className="four-font">หรือ</h1>
                <div className="outline-login-google">
                    <GoogleLogin
                        className="login-google"
                        clientId={clientId}
                        buttonText = "เข้าสู่ระบบผ่าน Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                    />
                </div>
            </div>

            <div >
                <button type="submit" className="button-login" onClick={btnLogin}>เข้าสู่ระบบ</button>
            </div>
        </div>
    </div>
  );
};
export default LoginForm;