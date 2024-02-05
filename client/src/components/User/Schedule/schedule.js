import React from 'react';
import Navbar from '../Navbar';

const Schedule = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row ">
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
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
