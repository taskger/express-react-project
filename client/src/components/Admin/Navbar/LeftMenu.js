import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom"; // Import Link from React Router


const LeftMenu = ({ mode }) => {
  const menuStyle = {
    backgroundColor: "#245953", // Set your desired background color
    color: "white", // Set the font color to white
  };
  
  return (
    <Menu mode={mode} style={menuStyle}>
      <Menu.Item key="home">
        <Link to="/admin/home">หน้าแรก</Link> 
      </Menu.Item>
      <Menu.Item key="schedule">
        <Link to="/admin/schedule">จัดตาราง</Link>
      </Menu.Item>
      <Menu.Item key="course">
        <Link to="/admin/course">นำเข้าหลักสูตร</Link>
      </Menu.Item>
      <Menu.Item key="registration">
        <Link to="/admin/registration">กำหนดวันลงทะเบียน</Link>
      </Menu.Item>
      <Menu.Item key="confirm">
        <Link to="/admin/confirm">รอการยืนยัน</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
