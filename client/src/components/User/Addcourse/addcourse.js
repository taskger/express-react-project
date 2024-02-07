import React, { useState } from 'react';
import Navbar from '../Navbar';
import "./addcourse.css";
import Lecture from './lecture';
import Practice from './practice'; // Assuming the Practice component is exported properly

const Schedule = () => {
  const [selectedLecture, setSelectedLecture] = useState(false); // Default value for lecture checkbox
  const [selectedPractice, setSelectedPractice] = useState(false); // Default value for practice checkbox

  const handleLectureChange = (event) => {
    setSelectedLecture(event.target.checked);
  };

  const handlePracticeChange = (event) => {
    setSelectedPractice(event.target.checked);
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
                type="checkbox"
                id="lecture"
                checked={selectedLecture}
                onChange={handleLectureChange}
              />
              <label className="form-check-label" htmlFor="lecture">
                บรรยาย
              </label>
            </div>

            <div className="col">
              <input
                className="form-check-input"
                type="checkbox"
                id="practice"
                checked={selectedPractice}
                onChange={handlePracticeChange}
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
            {selectedLecture && <Lecture />}
            {selectedPractice && <Practice />}
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
