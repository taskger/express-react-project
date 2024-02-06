import React, { useState } from 'react';
import Navbar from '../Navbar';
import "./addcourse.css";
import Lecter from './Lecter';

const Schedule = () => {
  const [selectedRadio, setSelectedRadio] = useState('lecture'); // Default value for lecture

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <div className="container addcourse">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col">
            <label htmlFor="semester" className="form-label">ปีหลักสูตร</label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="col">
              <input
                className="form-check-input"
                type="radio"
                name="lectureType"
                id="lecture"
                value="lecture"
                checked={selectedRadio === 'lecture'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="lecture">
                บรรยาย
              </label>
            </div>

            <div className="col">
              <input
                className="form-check-input"
                type="radio"
                name="lectureType"
                id="practice"
                value="practice"
                checked={selectedRadio === 'practice'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="practice">
                ปฏิบัติ
              </label>
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col">
            <div className="col-1"></div>
            <div className="col">
              <label htmlFor="semester" className="form-label">ภาคการศึกษา</label>
              <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label htmlFor="year" className="form-label">ปีการศึกษา</label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col"></div>
          <div class="bg">
          {selectedRadio === 'lecture' && <Lecter />}

          </div>
          <div className="row">
            <div className='col'>
            </div>
            <div className='col'>
              <button type="submit" class="btn btn-lg">ยืนยัน</button>
              </div>

              <div className='col'>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
