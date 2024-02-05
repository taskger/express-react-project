import React from 'react';
import Navbar from '../Navbar';
import "./addcourse.css";
import Lecter from './Lecter';
const Schedule = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row ">
          <div className="col-1">
            <label htmlFor="semester" className="form-label">ปีหลักสูตร</label>
          </div>
          <div className="col">
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label class="form-check-label" for="exampleRadios1">
              บรรยาย
            </label>
          </div>
          <div className="col">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label class="form-check-label" for="exampleRadios1">
              ปฏิบัติ
            </label>
          </div>
          <div className="col-1">
            <label htmlFor="semester" className="form-label">ภาคการศึกษา</label>
          </div>
          <div className="col">
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="year" className="form-label">ปีการศึกษา</label>
          </div>
          <div className="col">
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col">
          </div>
          <Lecter/>
        </div>
      </div>
    </div>
  );
};

export default Schedule;