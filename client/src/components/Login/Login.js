import React from "react";
import "./login.css";


import { gapi } from "gapi-script";
import { GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from "react";
import Axios from 'axios';
import Swal from 'sweetalert2'
import { jwtDecode } from "jwt-decode";


function LoginForm(){

    const [username,setUser] = useState("");
    const [password,setPassword] = useState("");

    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init ({
    //             clientID : clientId,
    //             scope: ''
    //         })
    //     }
    //     gapi.load("client:auth2", initClient)
    // }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await Axios.post('https://projectschedule-server.vercel.app/check', { username, password });
            
            if (response.status === 200) {
                localStorage.setItem('user',JSON.stringify({
                    role:"admin"
                }))
                window.location.href = 'https://projectschedule.vercel.app/admin';
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error if needed
        }
    };
    
    const onSuccess = (decoded) => {
        // decoded now contains the JWT payload
        const { email, family_name, given_name, picture } = decoded;
        
        Axios.post('https://projectschedule-server.vercel.app/google', {
            Name: given_name,
            Surname: family_name,
            e_mail: email,
            Img: picture,
            Role: "user",
            Status: false
        }).then(response => {
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify({
                    name: given_name,
                    surname: family_name,
                    e_mail: email,
                    img: picture,
                    role: "user"
                }))
                window.location.href = 'https://projectschedule.vercel.app/user';
            } else if (response.status === 204) {
                Swal.fire({
                    color: "#000",
                    width: 500,
                    html: "โปรดรอการยืนยัน"
                });
            }
        }).catch(error => {
            console.error('Error logging in:', error);
        });
    }

    const [showPassword,setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
   
   
  return (
    <div className="container-login">
        <div className='img-kaset'>
            <img src ="img/kaset.png" className="logo" alt="logo"/>
        </div>
        <div className='container-input'>
            <div className='empty'>
                <h1 className='Rabop-font'>ระบบจัดตารางสอน</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='input-all'>
                <h2 className='sec-font'>บัญชีผู้ใช้ </h2>
                <input 
                    name="username"
                    className='input-User'
                    placeholder="ชื่อบัญชี"
                    value={username}
                    type="text"
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                <div className='password-container'>
                    <h2 className='three-font'>รหัสผ่าน</h2>
                    <input 
                        name="password"
                        className='input-User'
                        placeholder='รหัสผ่าน'
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <h1 className="four-font">หรือ</h1>
                    <div className="outline-login-google">
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            onSuccess(decoded);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                    </div>
                </div>
                <div >
                    <button type="submit" className="button-login" >เข้าสู่ระบบ</button>
                </div>
            </form>
        </div>
    </div>
  );
};
export default LoginForm;