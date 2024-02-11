import React from 'react';
import "./index.css"; // Import the external CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light" style={{ backgroundColor: '#245953' }}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul className="nav justify-content-start">

          <div class="container collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
            <div class="navbar-nav" >
                    <li className="nav-item active">
                      <Link to="/user" className="nav-link" >หน้าแรก</Link> 
                    </li>
                    <li className="nav-item "><Link to="/user/schedule" className="nav-link">ตารางสอน</Link></li>
                    <li className="nav-item"><Link to="/user/addcourse" className="nav-link">เพิ่มรายวิชา</Link></li>
            </div>
          </div>
          </ul>
          <ul class="nav justify-content-end">
            <div class="dropdown  dropstart">
              <button class="btn btnimgprofiledefault" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='imgprofiledefault' src="/img/profile_default.png" alt="profile" width="85" height="85"/>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/admin/schedule">Logout</a></li>
              </ul>
              
            </div>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;