import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import "./addcourse.css";
import Lecture from './lecture';
import Practice from './practice';
import Axios from 'axios';
import Swal from 'sweetalert2';


// เรียกข้อมูลปฏิบัติมา modal ยื่นยัน  เรียกชั้นปีที่เรียน 
// แก้ข้อมูลที่ต้องเพิ่มรายวิชาปฏิบัติ มีเฉพาะวิชาหลัก หมู่เรียน /
// ทดสอบเรียกวิชาจากดาต้าเบส 100% ยังเหลือเปลี่ยนเป็น table หลักสูตร /
// หลังกดปุ่มยืนยันจะโหลดหน้าเว็บใหม่ ทำแล้วแต่ต้องแก้ให้เกิดถ้าข้อมูลกรอกไม่ครบ
// ล้างข้อมูล /
// เลือกรายวิชาสามารถกรอกเพื่อหาได้ x
// แยกช่องอันใหนวิชาหลักวิชาสาย /
// เวลาเริ่มต้นต้องน้อยกว่าเวลาสิ้นสุด
const Schedule = () => {
  const [selectedLecture, setSelectedLecture] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState(false); 




  //ทำให้รู้ว่าบรรยาย ปฏิบัติขึ้น database หลังภาคการศึกษา true false
  const [lecture, setLecture] = useState(false); 
  const [practice, setPractice] = useState(false); 

  const [semester, setSemester] = useState(null);
  const [professor] = useState("test");


  //ทำแสดงชั้นปี
  const [test] = useState('2564');


  //ดึงปีปัจจุบัน
  const [year, setYear] = useState(null);

  useEffect(() => {
    const currYear = new Date().getFullYear();
    setYear(currYear+543);
  },[setYear]);


  const LectureChange = (event) => {
    setSelectedLecture(event.target.checked);
  };

  const PracticeChange = (event) => {
    setSelectedPractice(event.target.checked);
  };

  useEffect(() => {
    if (selectedLecture === false) { 
      setLecture(false)
    }else if (selectedLecture === true){
      setLecture(true)
    }
    if (selectedPractice === false) { 
      setPractice(false)
    }else if (selectedPractice === true){
      setPractice(true)
    }
  },[selectedLecture, selectedPractice]);


  const [subject_lecture, setSubject_lecture] = useState("");
  const [num_students_lecture, setNum_students_lecture] = useState("0");
  const [sec_lecture, setSec_lecture] = useState("0");
  const [day_lecture, setDay_lecture] = useState("");
  const [start_time_lecture, setStart_time_lecture] = useState("");
  const [end_time_lecture, setEnd_time_lecture] = useState("");
  const [catagory_lecture, setCatagory_lecture] = useState("");
  const [studentyear_lecture, setStudentyear_lecture] = useState();

  //ปีหลักสูตรใช้ดึงข้อมูลมาโชว์ของปีหลักสูตรนั้นมาโชว์
  const uniqueYears = new Set();
  const [courseyear, setCourseYear] = useState(null); //เก็บหลักสูตรทั้งหมดที่ดึงมา
  const [selectcourseyear, setselectCourseYear] = useState(null); //เก็บปีหลักสูตรที่ select
  const [listcourse, setListcourse] = useState(null); //เก็บข้อมูลในปีหลักสูตรที่ดึงมา

  useEffect(() => { //ดึงหลักสูตรทั้งหมดใน table
    Axios.get(`http://localhost:3000/readcourse`).then(response => 
      {
        setCourseYear(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

  useEffect(() => { //ดีงข้อมูลจากปีที่เลือก
    Axios.get(`http://localhost:3000/readcourse/single/${selectcourseyear}`).then(response => 
    {
      setListcourse(response.data.results)

    })
    .catch(error => {
      console.error(error);
    });
  },[selectcourseyear]);

  const reciverdatafromlecture = (data) => {
    console.log('ข้อมูลจากวิชาบรรยาย', data);
    setSubject_lecture(data.subject);
    setNum_students_lecture(data.num_students);
    setSec_lecture(data.sec);
    setDay_lecture(data.day);
    setStart_time_lecture(data.start_time);
    setEnd_time_lecture(data.end_time);
    setCatagory_lecture(data.catagory);
    setStudentyear_lecture(data.studentyear);
  };


  const [subject_practice, setSubject_practice] = useState("");
  const [num_students_practice, setNum_students_practice] = useState("0");
  const [sec_practice, setSec_practice] = useState("0");
  const [day_practice, setDay_practice] = useState("");
  const [start_time_practice, setStart_time_practice] = useState("");
  const [end_time_practice, setEnd_time_practice] = useState("");
  const [catagory_practice, setCatagory_practice] = useState("");
  const [studentyear_practice, setStudentyear_practice] = useState();

  

  const reciverdatafrompractice = (data) => {
    console.log('ข้อมูลจากวิชาปฏิบัติ:', data);
    setSubject_practice(data.subject_practice);
    setNum_students_practice(data.num_students_practice);
    setSec_practice(data.sec_practice);
    setDay_practice(data.day_practice);
    setStart_time_practice(data.start_time_practice);
    setEnd_time_practice(data.end_time_practice);
    setCatagory_practice(data.catagory_practice);
    setStudentyear_practice(data.studentyear);
  
  
  };

  const addLecture = () =>{
    if (semester === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลไม่ครบ",
        text: "กรุณาระบุภาคการศึกษา",
        icon: "warning"
      });
      return;
    }
    if (year === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลไม่ครบ",
        text: "กรุณาระบุปีการศึกษา",
        icon: "warning"
      });
      return;
    }
    if (subject_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาเลือกวิชา",
        icon: "warning"
      });
      return;
    }
    if (num_students_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาระบุจำนวนผู้เรียน",
        icon: "warning"
      });
      return;
    }
    if (sec_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาเลือก sec",
        icon: "warning"
      });
      return;
    }
    if (day_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาระบุวันที่",
        icon: "warning"
      });
      return;
    }
    if (start_time_lecture === null && end_time_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาระบุเวลาที่จะสอน",
        icon: "warning"
      });
      return;
    }
    if (catagory_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาเลือกประเภทวิชา",
        icon: "warning"
      });
      return;
    }
    if (studentyear_lecture === null && selectedLecture === true){
      Swal.fire({
        title: "ข้อมูลภาคบรรยาย",
        text: "กรุณาเลือกชั้นปีที่จะสอน",
        icon: "warning"
      });
      return;
    }

    if (subject_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาเลือกวิชา",
        icon: "warning"
      });
      return;
    }
    if (num_students_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาระบุจำนวนผู้เรียน",
        icon: "warning"
      });
      return;
    }
    if (sec_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาเลือก sec",
        icon: "warning"
      });
      return;
    }
    if (day_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาระบุวันที่",
        icon: "warning"
      });
      return;
    }
    if (start_time_practice === null && end_time_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาระบุเวลาที่จะสอน",
        icon: "warning"
      });
      return;
    }
    if (catagory_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาเลือกประเภทวิชา",
        icon: "warning"
      });
      return;
    }
    if (studentyear_practice === null && selectedPractice === true){
      Swal.fire({
        title: "ข้อมูลภาคปฏิบัติ",
        text: "กรุณาเลือกชั้นปีที่จะสอน",
        icon: "warning"
      });
      return;
    }
    if (selectedLecture === true){
      Axios.post('http://localhost:3000/user/addcourse/createlecture',{
        year_lecture: year,
        semester_lecture: semester,
        professor_lecture: professor,
        subject_lecture: subject_lecture,
        num_students_lecture: num_students_lecture,
        sec_lecture: sec_lecture,
        day_lecture: day_lecture,
        start_time_lecture: start_time_lecture,
        end_time_lecture: end_time_lecture,
        catagory_lecture:catagory_lecture,
        lecture: lecture,
        studentyear_lecture: studentyear_lecture,
      });
    }
    if (selectedPractice === true){
      Axios.post('http://localhost:3000/user/addcourse/createpractice',{
        year_practice: year,
        semester_practice: semester,
        professor_practice: professor,
        subject_practice: subject_practice,
        num_students_practice: num_students_practice,
        sec_practice: sec_practice,
        day_practice: day_practice,
        start_time_practice: start_time_practice,
        end_time_practice: end_time_practice,
        catagory_practice:catagory_practice,
        practice: practice,
        studentyear_practice:studentyear_practice,
      });
    }

    window.location.reload();
    
  }

  return (
    <div>
      <Navbar/>
      <div className="container addcourse">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col">
            <label htmlFor="course-year" className="form-label">ปีหลักสูตร<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="course-year" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"    
              onChange={(event) =>{
                setselectCourseYear(event.target.value)
              }}
              
              >
              <option selected disabled>กรุณาเลือกปีหลักสูตร</option>
              
              {Array.isArray(courseyear) && courseyear.map(course => {
              if (!uniqueYears.has(course.year)) {
                uniqueYears.add(course.year);
                return (
                  <option key={course.id} value={course.year}>
                    {course.year}
                  </option>
                );
              }
              return null;
            })}

            </select>
            <div className="col">
              <label htmlFor="coursetype" className="form-label">ประเภทวิชาที่ต้องการ<span className="form-required" title="This field is required.">*</span></label>

              <input
                className="form-check-input addcourse"
                type="checkbox"
                id="lecture"
                value="lecture" 
                checked={selectedLecture}
                onChange = { (event) => 
                  { LectureChange(event)}}

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
                  { PracticeChange(event)}}
              />
              <label className="form-check-label" htmlFor="practice">
                ปฏิบัติ
              </label>
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col">
            <label htmlFor="year" className="form-label">ปีการศึกษา<span className="form-required" title="This field is required.">*</span></label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected value={year} key={year}>{year}</option>

            </select>
            <label htmlFor="semester" className="form-label">ภาคการศึกษา<span className="form-required" title="This field is required.">*</span></label>
              <select id="semester"                
                  onChange = { (event) => 
                  {
                    setSemester(event.target.value) } 
                  } className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected disabled>กรุณาเลือกภาคการศึกษา</option>
                <option value="เทอมต้น">เทอมต้น</option>
                <option value="เทอมปลาย">เทอมปลาย</option>
                <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
              </select>
          </div>

          <div className="col"></div>

          {selectedLecture || selectedPractice ? (
          <div className="bg">

            <div className="row">
            {selectedLecture && (
              <div className='col'>
                <form>
              {selectedLecture &&   <Lecture listcourse={listcourse} sendData={reciverdatafromlecture} />}
                </form>

              </div>
            )}
              {selectedPractice && (
                <div className='col'>
                  <form>
                  {selectedPractice && <Practice listcourse={listcourse} sendData={reciverdatafrompractice}/>}
                  </form>

                </div>
              )}
            </div>

          </div>) : null}
          <div className="row LP">
            <div className='col LP'>
            </div>

            {selectedLecture || selectedPractice ? (
            <div className='col'>
              <button type="button" className="btn addcourse submit btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">ยืนยัน</button>

              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content show">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">ยืนยันข้อมูล</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body selectLP">
                      {selectedLecture && (
                        <div className="lecture-info">
                          <p>**วิชาบรรยาย:**</p>
                          <p>ภาคการศึกษา : {semester}</p>
                          <p>ปีการศึกษา : {year}</p>
                          <p>วิชา : {subject_lecture}</p>
                          <p>จำนวนนักเรียน : {num_students_lecture}</p>
                          <p>หมู่เรียน : {sec_lecture}</p>
                          <p>วัน : {day_lecture}</p>
                          <p>เวลา :{start_time_lecture} - {end_time_lecture}</p>
                          <p>ประเภทวิชา : {catagory_lecture}</p>
                          <p>ชั้นปีที่เรียน : {studentyear_lecture}</p>
                        </div>
                      )}
                      {selectedPractice && (
                        <div className="practice-info">
                          <p>**วิชาปฏิบัติ:**</p>
                          <p>ภาคการศึกษา : {semester}</p>
                          <p>ปีการศึกษา : {year}</p>
                          <p>วิชา : {subject_practice}</p>
                          <p>จำนวนนักเรียน : {num_students_practice}</p>
                          <p>หมู่เรียน : {sec_practice}</p>
                          <p>วัน : {day_practice}</p>
                          <p>เวลา :{start_time_practice} - {end_time_practice}</p>
                          <p>ประเภทวิชา : {catagory_practice}</p>
                          <p>ชั้นปีที่เรียน : {studentyear_practice}</p>
                        </div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addLecture}>ตกลง</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : true}

            <div className='col'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
