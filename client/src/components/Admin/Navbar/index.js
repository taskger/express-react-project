import React from 'react';
import "./index.css"; // Import the external CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router
const Navbar = () => {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <a href="index.html" className="font-weight-bold">Brand</a>
              </div>
            </div>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5">
                  <span className="icon-menu h3 text-white"></span>
                </a>
              </span>
              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="nav-item active"><Link to="/admin" className="nav-link">หน้าแรก</Link></li>
                  <li className="nav-item"><Link to="/admin/schedule" className="nav-link">จัดตาราง</Link></li>
                  <li className="nav-item"><Link to="/admin/course" className="nav-link">นำเข้าหลักสูตร</Link></li>
                  <li className="nav-item"><Link to="/admin/registration" className="nav-link">กำหนดวันลงทะเบียน</Link></li>
                  <li className="nav-item"><Link to="/admin/confirm" className="nav-link">รอการยืนยัน</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;