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
        <Link to="/user/home">หน้าแรก</Link> 
      </Menu.Item>
      <Menu.Item key="schedule">
        <Link to="/user/schedule">ตารางสอน</Link>
      </Menu.Item>
      <Menu.Item key="addcourse">
        <Link to="/user/addcourse">เพิ่มรายวิชา</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
