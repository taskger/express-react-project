import React from 'react';
import Navbar from '../Navbar';
import "./course.css";
const Course = () => {
  return (
    <div>
      <Navbar/>
      <h1>หน้านำเข้าหลักสูตรของ ผู้จัดตาราง</h1>
        <div className="App">
          <div className="choose-PeLhagSu">
            <p> ปีหลักสูตร </p>
            <select className="PeLhagSu">
              <option value="2566">2566</option>
              <option value="2565">2565</option>
              <option value="2564">2564</option>
              <option value="2563">2563</option>
            </select>
          </div>

          <div className="importfile-LhagSu">
            <p> ไฟล์หลักสูตร </p>
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile"/>
            </div>       
          </div>
        </div>

    </div>
  );
};

export default Course;