import React from "react";
import "./login.css";


import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
import Axios from 'axios';

function LoginForm(){
    const clientId = "1012567060456-cj1br6iuqir1rnq2q0du3vb1h769ihm1.apps.googleusercontent.com";

    const [username,setUser] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        const initClient = () => {
            gapi.client.init ({
                clientID : clientId,
                scope: ''
            })
        }
        gapi.load("client:auth2", initClient)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3000/check', { username, password });

            if (response.status === 200) {
                // Redirect to http://localhost:3000/admin
                window.location.href = 'http://localhost:3000/admin';
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error if needed
        }
    };
    
    const onSuccess = (res) => {
        const { email, familyName, givenName, imageUrl } = res.profileObj;
        console.log(email)
        console.log(givenName)
        console.log(familyName)
        console.log(imageUrl)
        Axios.post('http://localhost:3000/google',{
            Name : givenName ,
            Surname : familyName,
            e_mail : email ,
            Img : imageUrl,
            Role : "user" ,
            Status: false
        })  .then(response => {
            if (response.status === 200) { // Assuming successful login response has status 200
                window.location.href = 'http://localhost:3000/user'; // Redirect to '/user' page
            } else if (response.status === 204) {
                alert("โปรดรอการยืนยัน");  // Handle login failure (e.g., display error message)
            }
          })
          .catch(error => {
            console.error('Error logging in:', error);
            // Handle login errors (e.g., network issues, server errors)
          });
    }

    const [showPassword,setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                            className="login-google"
                            clientId={clientId}
                            buttonText = "เข้าสู่ระบบผ่าน Google"
                            onSuccess={onSuccess}
                            cookiePolicy={"single_host_origin"}
                            isSignedIn={true}
                            prompt="login"
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