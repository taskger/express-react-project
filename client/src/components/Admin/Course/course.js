import React from 'react';
import Navbar from '../Navbar';
import "./course.css";
import { useState } from "react";
import * as XLSX from "xlsx";

const Course = () => {
  const [data, setData] = useState([]);
  const handleFileUpload = (e) => {
  const reader = new FileReader();
  reader.readAsBinaryString(e.target.files[0]);
  reader.onload = (e) => {
    const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

return (
    <div>
      <Navbar/>
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
          {data.length > 0 && (

              <div className='scrollwrapper'>
                <table className="table table-bordered course ">
                <thead>
                  <tr >
                    {Object.keys(data[0]).map((key) => (
                      <th key={key}>{key} </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value, index) => (
                          <td className='table-success' key={index}>{value}</td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
          )}
          <button type="submit" class="btn registration submit btn-primary btn-block">ยืนยัน</button>

        </div>              
    </div>
  );
};

export default Course;