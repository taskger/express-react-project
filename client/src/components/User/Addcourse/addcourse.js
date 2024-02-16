import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import "./addcourse.css";
import Lecture from './lecture';
import Practice from './practice'; // Assuming the Practice component is exported properly
import Axios from 'axios';

const Schedule = ({checkdatachange}) => {
  const [selectedLecture, setSelectedLecture] = useState(false); // Default value for lecture checkbox
  const [selectedPractice, setSelectedPractice] = useState(false); // Default value for practice checkbox
  const [courseyear, setCourseYear] = useState(null);
  const [lecture, setLecture] = useState(null);
  const [practice, setPractice] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [num_students, setNum_students] = useState("0");
  const [sec, setSec] = useState("0");
  const [day, setDay] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [catagory, setCatagory] = useState(null);

  const LectureChange = (event) => {
    setSelectedLecture(event.target.checked);
  };

  const PracticeChange = (event) => {
    setSelectedPractice(event.target.checked);
  };
 /* useEffect(() => {
    testt({
      lecture,
    });
  }, [lecture]);
  useEffect(() => {
    testtt({
      practice,
    });
  }, [practice]);*/

  const reciverdata = (data) => {
    console.log('Received data in Schedule component:', data);
    setSubject(data.subject);
    setNum_students(data.num_students);
    setSec(data.sec);
    setDay(data.day);
    setStart_time(data.start_time);
    setEnd_time(data.end_time);
    setCatagory(data.catagory);
  };
  const addLecture = () =>{
    Axios.post('http://localhost:3000/user/addcourse/create',{
      subject: subject,
      num_students: num_students,
      sec: sec,
      day: day,
      start_time: start_time,
      end_time: end_time,
      catagory: catagory
    });
  }

  console.log(courseyear)
  console.log(semester)
  console.log(lecture)
  console.log(practice)
  return (
    <div>
      <Navbar/>

      <div className="container addcourse">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col">
            <label htmlFor="course-year" className="form-label">ปีหลักสูตร<span class="form-required" title="This field is required.">*</span></label>
            <select 
              id="course-year" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"                
              onChange={(event) =>{
                setCourseYear(event.target.value)
              }}>
              <option selected value={null}>Open this select menu</option>
              <option value="te">One</option>
              <option value="qw">Two</option>
              <option value="we">Three</option>

            </select>

            <div className="col">
              <label htmlFor="coursetype" className="form-label">ประเภทวิชาที่ต้องการ<span class="form-required" title="This field is required.">*</span></label>

              <input
                className="form-check-input addcourse"
                type="checkbox"
                id="lecture"
                value="lecture" 
                checked={selectedLecture}
                onChange = { (event) => 
                  { LectureChange(event); 
                    setLecture(event.target.value) } 
                  }

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
                value="practice" 

                checked={selectedPractice}
                onChange = { (event) => 
                  { PracticeChange(event); 
                    setPractice(event.target.value) } 
                  }
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
              <select id="semester"                onChange = { (event) => 
                  { PracticeChange(event); 
                    setSemester(event.target.value) } 
                  } className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="เทอมต้น">One</option>
                <option value="เทอมปลาย">Two</option>
                <option value="ฤดูร้อน">Three</option>
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
              {selectedLecture &&   <Lecture handleLectureData={reciverdata} />}
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
              <button type="button" class="btn addcourse submit btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">ยืนยัน</button>
              <button type="submit" class="btn addcourse cancel  btn-lg">ล้างข้อมูล</button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">ยืนยันข้อมูล</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>ภาคการศึกษา : {semester}</p>
                      <p>วิชา : {subject}</p>
                      <p>จำนวนนักเรียน : {num_students}</p>
                      <p>หมู่เรียน : {sec}</p>
                      <p>วัน : {day}</p>
                      <p>เวลา :{start_time} - {end_time}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">ยกเลิก</button>
                      <button type="button" class="btn btn-primary" onClick={addLecture} >ตกลง</button>
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
