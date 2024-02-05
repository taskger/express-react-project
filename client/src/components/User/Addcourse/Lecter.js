import React from 'react';

const Schedule = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
        <div className="col">
          </div>
          <div className="col-1">
          </div>
          <div className="col">
            <label htmlFor="semester" className="form-label">ชื่อวิชา</label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="year" className="form-label">รับจำนวน</label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="semester" className="form-label">หมู่เรียน</label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="year" className="form-label">วัน</label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected Disable>กรุณาเลือกวัน</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="year" className="form-label">เวลา</label>
            <div class="cs-form">
              <input type="time" class="form-control" value="10:05 AM" />
            </div>
          </div>
          <div className="col-1">

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
