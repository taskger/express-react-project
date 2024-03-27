import React from 'react';
import Navbar from '../Navbar';
import Axios from 'axios';
import "./course.css";
import { useState } from "react";
import * as XLSX from "xlsx";
import Swal from 'sweetalert2';

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
      console.log(workbook)
      console.log(sheetName)
      console.log(sheet)
      console.log(parsedData)
    };
  }
console.log(data)
const addDatacourse = () => {
  const selectElement = document.querySelector('.PeLhagSu');
  const selectedValue = selectElement.options[selectElement.selectedIndex].value;
  if (data.length === 0) {
    Swal.fire({
      title: "ข้อมูลไม่ครบ",
      text: "กรุณาเลือกไฟล์ xlsx,xls",
      icon: "warning"
    });
    return; // Prevent further processing if no data is available
  }
  else {Axios.post('http://localhost:3000/create',{
    dataserver : data,
    year: selectedValue,
  }).then((response) => {
    if (response.status === 201) {
      Swal.fire({
        title: "SUCCESS",
        text: response.data.message,
        icon: "success",
        timer: 2000
      });
      setTimeout(function(){
        window.location.reload();
     }, 2000);
    } else {
      console.error('Unexpected response status:', response.status);
      // Handle unexpected response codes (optional)
    }
  })
  .catch((error) => {
    // Handle error response (data not saved due to duplication)
    if (error.response && error.response.status === 400) {
      // Check for specific error code and message structure as defined in the server-side response
      if (error.response.data && error.response.data.error && error.response.data.error.message) {
        const errorMessage = error.response.data.error.message;
        Swal.fire({
          title: "หลักสูตรซ้ำ",
          text: errorMessage,
          icon: "warning"
        });
      } else {
        alert('An error occurred while saving data. Please try again.'); // Generic error message if specific message structure not found
      }
    } else {
      // Handle other types of errors (e.g., network issues)
      console.error('An unexpected error occurred:', error);
      alert('An unexpected error occurred. Please try again later.'); // Inform user about the generic error
    }
  });
}};

return (
    <div>
      <Navbar/>
        <div className="App">
          <div className="choose-PeLhagSu">
            <p> ปีหลักสูตร </p>
            <select className="PeLhagSu">
              <option value="67">2567</option>
              <option value="66">2566</option>
              <option value="65">2565</option>
              <option value="64">2564</option>
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
          <button type="submit" class="btn registration submit btn-primary btn-block" onClick={addDatacourse}>ยืนยัน</button>

        </div>              
    </div>
  );
};

export default Course;