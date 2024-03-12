import React from 'react';
import "./index.css"; // Import the external CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <div>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#245953' }}>

        <div className="container-fluid nav">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="nav justify-content-start">

          <div className="container collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav " >
              <li className="nav-item active ">
                <Link to="/admin" className="nav-link admin" >หน้าแรก</Link> 
              </li>
              <li className="nav-item"><Link to="/admin/schedule" className="nav-link admin">จัดตาราง</Link></li>
              <li className="nav-item"><Link to="/admin/course" className="nav-link admin course">นำเข้าหลักสูตร</Link></li>
              <li className="nav-item"><Link to="/admin/registration" className="nav-link admin registration">กำหนดวันลงทะเบียน</Link></li>
              <li className="nav-item"><Link to="/admin/confirm" className="nav-link admin">รอการยืนยัน</Link></li>                   
            </div>
          </div>
          </ul>
          <ul className="nav justify-content-end">
          <div class="dropdown  dropstart">
            <button class="btn btnimgprofiledefault" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img className='imgprofiledefault' src="/img/profile_default.png" alt="profile" width="85" height="85"/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Logout</a></li>
            </ul>
            
          </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
   
export default Navbar;
