import React from 'react';
import Navbar from '../Navbar';
import "./course.css";
import { useState } from "react";
import * as XLSX from "xlsx";

const [data, setData] = useState([]);
const handleFileUpload = (e) => {}

const Course = () => {
  return (
    <div>
      <Navbar/>
      <h1>หน้านำเข้าหลักสูตรของ ผู้จัดตาราง</h1>
        <div className="App">
          <div className="choose-PeLhagSu">
            <p> ปีหลักสูตร </p>
            <select className="PeLhagSu">
              <option value="2566">2567</option>
              <option value="2565">2566</option>
              <option value="2564">2565</option>
              <option value="2563">2564</option>
            </select>
          </div>

          <div className="importfile-LhagSu">
            <p> ไฟล์หลักสูตร </p>
            <div class="mb-3">
              <input class="form-control" accept=".xlsx, .xls" type="file" onChange={handleFileUpload} id="formFile"/>
            </div>       
          </div>
        </div>

    </div>
  );
};

export default Course;