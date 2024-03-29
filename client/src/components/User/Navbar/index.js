import React from 'react';
import "./index.css"; // Import the external CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router
import { GoogleLogout } from 'react-google-login';

const Navbar = () => {
  const clientId = "1012567060456-cj1br6iuqir1rnq2q0du3vb1h769ihm1.apps.googleusercontent.com";
  const logout = (res) => {
    console.log("Logging out...");
    window.location.href = 'http://localhost:3000/';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light" style={{ backgroundColor: '#245953' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav justify-content-start">

          <div className="container collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
            <div className="navbar-nav" >
                    <li className="nav-item active">
                      <Link to="/user" className="nav-link" >หน้าแรก</Link> 
                    </li>
                    <li className="nav-item "><Link to="/user/schedule" className="nav-link">ตารางสอน</Link></li>
                    <li className="nav-item"><Link to="/user/addcourse" className="nav-link">เพิ่มรายวิชา</Link></li>
            </div>
          </div>
          </ul>
          <ul className="nav justify-content-end">
            <div className="dropdown  dropstart">
              <button className="btn btnimgprofiledefault" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='imgprofiledefault' src="/img/profile_default.png" alt="profile" width="85" height="85"/>
              </button>
              <ul className="dropdown-menu">
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                />
              </ul>
            </div>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;