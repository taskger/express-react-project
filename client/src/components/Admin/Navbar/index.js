import React from 'react';
import "./index.css"; // Import the external CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <div>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#245953' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" >
              <li className="nav-item active">
                <Link to="/admin" className="nav-link" >หน้าแรก</Link> 
              </li>
              <li className="nav-item"><Link to="/admin/schedule" className="nav-link">จัดตาราง</Link></li>
              <li className="nav-item"><Link to="/admin/course" className="nav-link course">นำเข้าหลักสูตร</Link></li>
              <li className="nav-item"><Link to="/admin/registration" className="nav-link registration">กำหนดวันลงทะเบียน</Link></li>
              <li className="nav-item"><Link to="/admin/confirm" className="nav-link">รอการยืนยัน</Link></li>                   
            </div>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item"><Link to="#" className="nav-link">Logout</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
   
export default Navbar;
