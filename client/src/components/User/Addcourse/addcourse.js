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
            <label htmlFor="semester" className="form-label">ปีหลักสูตร<span class="form-required" title="This field is required.">*</span></label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="col">
              <label htmlFor="semester" className="form-label">ประเภทวิชาที่ต้องการ<span class="form-required" title="This field is required.">*</span></label>

              <input
                className="form-check-input addcourse"
                type="checkbox"
                id="lecture"
                checked={selectedLecture}
                onChange={handleLectureChange}
              />
              <label className="form-check-label addcourse" htmlFor="lecture">
                บรรยาย
              </label>
            </div>

            <div className="col">
              <input
                className="form-check-input addcourse"
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
              <label htmlFor="semester" className="form-label">ภาคการศึกษา<span class="form-required" title="This field is required.">*</span></label>
              <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label htmlFor="year" className="form-label">ปีการศึกษา<span class="form-required" title="This field is required.">*</span></label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col"></div>
          {selectedLecture || selectedPractice ? (
          <div class="bg">
            <div class="row">
            {selectedLecture && (
              <div className='col'>
              {selectedLecture && <Lecture />}
              </div>
            )}
              {selectedPractice && (
                <div className='col'>
                  {selectedPractice && <Practice />}
                </div>
              )}
            </div>
          </div>) : null}
          <div className="row">
            <div className='col'>
            </div>
            {selectedLecture || selectedPractice ? (

            <div className='col'>
              <button type="submit" class="btn addcourse submit btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">ยืนยัน</button>
              <button type="submit" class="btn addcourse cancel  btn-lg">ล้างข้อมูล</button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">ยืนยันข้อมูล</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">ยกเลิก</button>
                      <button type="button" class="btn btn-primary" >ตกลง</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>) : null}
            <div className='col'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
