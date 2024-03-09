import React, { useState,useEffect  } from 'react';
import Axios from 'axios';
import "./filter.css";
import Overlapping from './overlapping';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//ตัวกรอง
//ตาราง
//ถ้าวิชาซ้อนกัน
// export อาจต้องใส่หน่วยกิตใน table ของวิชา
const Schedule = ({year,semester,firstyear,secondyear,thirdyear,fourthyear,otheryear,main,sai}) => {
  const [courseyear, setCourseYear] = useState(null); //เก็บหลักสูตรทั้งหมดที่ดึงมา
  const [id, setID] = useState(null);
  const [subject, setSubject] = useState(null);
  const [num_students, setNum_students] = useState(null);
  const [sec, setSec] = useState(null);
  const [day, setDay] = useState(null);
  const [start_time, setStart_time] = useState(null);
  const [end_time, setEnd_time] = useState(null);

  console.log(firstyear)
  console.log(secondyear)
  console.log(thirdyear)
  console.log(fourthyear)
  console.log(otheryear)
  console.log(main)
  console.log(sai)
  
  let arrayDataItems;
  const stackdata = (event) => {
    setID(event.currentTarget.getAttribute("data-id"));
    setSubject(event.currentTarget.getAttribute("data-subject"));
    setNum_students(event.currentTarget.getAttribute("data-num_students"));
    setSec(event.currentTarget.getAttribute("data-sec"));
    setDay(event.currentTarget.getAttribute("data-day"));
    setStart_time(event.currentTarget.getAttribute("data-start_time"));
    setEnd_time(event.currentTarget.getAttribute("data-end_time"));
  }


  const edit = () => {
    Axios.patch(`http://localhost:3000/updateschedule`, {
      id: id,
      subject_edit: subject,
      num_students_edit: num_students,
      sec_edit: sec,
      day_edit: day,
      start_time_edit: start_time,
      end_time_edit: end_time,
    })

    
    Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`).then(response => 
    {
      setCourseYear(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });

  };

    useEffect(() => { //ดีงข้อมูลจากปีที่เลือก
      if (year && semester){
      Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`).then(response => 
      {
        setCourseYear(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
       }
    },[year,semester]);
  const deleteschedule = () => {
    Axios.delete(`http://localhost:3000/deleteschedule/single/${id}`).then(response =>
      {
        setCourseYear(
          courseyear.filter((val) =>{
            return val.id !== id;
          })
        )
      }
    )
    Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`).then(response => 
    {
      setCourseYear(response.data.results)
    })
    .catch(error => {
      console.error(error);
    });
  }
  const submit = () => {
    confirmAlert({
      title: `กดยืนยันเพื่อลบข้อมูล`,
      message: `วิชา ${subject}`,
      buttons: [
        {
          label: 'ยืนยัน',
          onClick: () => deleteschedule()
        },
        {
          label: 'ยกเลิก',
        }
      ]
    });
  };
    let overlappingCourses = [];

  if (courseyear) {
    arrayDataItems = courseyear.map(course => {
      const hasOverlap = courseyear.some(otherCourse => {
        return (
          otherCourse.id !== course.id &&
          otherCourse.day === course.day &&
          otherCourse.start_time < course.end_time &&
          otherCourse.end_time > course.start_time
        );
      });
  
      return (
        <div key={course.id}>
          {hasOverlap ? (
            <div className='overlapping'>
              <button
                type="button"
                className="btn editoverlapping"
              >{course.id}
                มีวิชาซ้อนกัน
              </button>
            </div>
          ) : (
            <div className='lecturecorrect'>
              <button
                type="button"
                className="btn editlecturecorrect"
                data-bs-toggle="modal"
                data-bs-target={`#staticBackdropTest-${course.id}`}
                data-id={course.id}
                data-subject={course.subject}
                data-num_students={course.num_students}
                data-sec={course.sec}
                data-start_time={course.start_time}
                data-end_time={course.end_time}
                onClick={(event) => { stackdata(event)}}>
                {course.id}
                <div className='subject'>
                  {course.subject}
                </div>
                <div className='name'>
                  อ.{course.professor}
                </div>
                <div className='time'>
                  {course.start_time} - {course.end_time}
                </div>
              </button>
            </div>
          )}
          
          
          <div className="modal fade" id={`staticBackdropTest-${course.id}`} data-bs-backdrop="test" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                      {course.id}
                    <label htmlFor="subject" className="form-label">ชื่อวิชา</label>
                    <input id="subject" class="form-control" type="text" placeholder={course.subject} aria-label="Disabled input example" disabled/>

                    <label htmlFor="sec" className="form-label">หมู่เรียน</label>

                    <input id="sec" class="form-control" type="text" placeholder={course.sec} aria-label="Disabled input example" disabled/>

                    <div className="cs-form ">
                    <label className="form-label">วัน</label>
                      <select 
                        id="days" 
                        className="form-select form-select-sm mb-3" 
                        aria-label=".form-select-sm example"
                        onChange={(event) =>{setDay(event.target.value);}}>
                        <option selected >{course.day}</option>
                        <option value="วันจัทนร์">วันจัทนร์</option>
                        <option value="วันอังคาร">วันอังคาร</option>
                        <option value="วันพุธ">วันพุธ</option>
                        <option value="วันพฤหัสบดี">วันพฤหัสบดี</option>
                        <option value="วันศุกร์">วันศุกร์</option>
                        <option value="วันเสาร์">วันเสาร์</option>
                        <option value="วันอาทิตย์">วันอาทิตย์</option>
                      </select>
                    <div className='row'>
                        <div className='col'>
                        <h7>เริ่มสอน</h7>
                        <select id="starttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
                        onChange={(event) =>{setStart_time(event.target.value);}}>
                            <option selected>{course.start_time}</option>
                            <option value="08:00">08.00</option>
                            <option value="08:30">08.30</option>
                            <option value="09:00">09.00</option>
                            <option value="09:30">09.30</option>
                            <option value="10:00">10.00</option>
                            <option value="10:30">10.30</option>
                            <option value="11:00">11.00</option>
                            <option value="11:30">11.30</option>
                            <option value="12:00">12.00</option>
                            <option value="12:30">12.30</option>
                            <option value="13:00">13.00</option>
                            <option value="13:30">13.30</option>
                            <option value="14:00">14.00</option>
                            <option value="14:30">14.30</option>
                            <option value="15:00">15.00</option>
                            <option value="15:30">15.30</option>
                            <option value="16:00">16.00</option>
                            <option value="16:30">16.30</option>
                            <option value="17:00">17.00</option>
                            <option value="17:30">17.30</option>
                            <option value="18:00">18.00</option>
                            <option value="18:30">18.30</option>
                            <option value="19:00">19.00</option>
                            <option value="19:30">19.30</option>
                            <option value="20:00">20.00</option>
                        </select>
                        </div>                
                        <div className='col'>
                        <h7>สิ้นสุดการสอน</h7>
                            <select id="endttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
                        onChange={(event) =>{setEnd_time(event.target.value);}}>
                        
                            <option selected>{course.end_time}</option>
                            <option value="08:00">08.00</option>
                            <option value="08:30">08.30</option>
                            <option value="09:00">09.00</option>
                            <option value="09:30">09.30</option>
                            <option value="10:00">10.00</option>
                            <option value="10:30">10.30</option>
                            <option value="11:00">11.00</option>
                            <option value="11:30">11.30</option>
                            <option value="12:00">12.00</option>
                            <option value="12:30">12.30</option>
                            <option value="13:00">13.00</option>
                            <option value="13:30">13.30</option>
                            <option value="14:00">14.00</option>
                            <option value="14:30">14.30</option>
                            <option value="15:00">15.00</option>
                            <option value="15:30">15.30</option>
                            <option value="16:00">16.00</option>
                            <option value="16:30">16.30</option>
                            <option value="17:00">17.00</option>
                            <option value="17:30">17.30</option>
                            <option value="18:00">18.00</option>
                            <option value="18:30">18.30</option>
                            <option value="19:00">19.00</option>
                            <option value="19:30">19.30</option>
                            <option value="20:00">20.00</option>

                            </select>                
                        </div>
                        
                    </div>
                    </div>
                </div>
                    <div className="modal-footer">
                          <div className='col'>
                            <button type="button" className="btn btn-danger bitrash table" data-bs-dismiss="modal"
                            onClick = {()=>{submit()}}>
                              <span className="bi bi-trash table"></span>
                            </button>
                          </div>

                            <button type="button" className="btn btn-primary" 
                              defaultValue={course.id}
                              onClick = { () => { edit()}}
                              data-bs-dismiss="modal">
                                ตกลง</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>

                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
    });
  }

  return (      
    <div>
      <table className="table table-bordered outschedule">
        <table className="table table-bordered schedule  ">
            <thead className="theadtable">
                <tr>
                <th scope="col" className='time'></th>
                <th scope="col" className='time'>08.00</th>
                <th scope="col" className='time'>09.00</th>
                <th scope="col" className='time'>10.00</th>
                <th scope="col" className='time'>11.00</th>
                <th scope="col" className='time'>12.00</th>
                <th scope="col" className='time'>13.00</th>
                <th scope="col" className='time'>14.00</th>
                <th scope="col" className='time'>15.00</th>
                <th scope="col" className='time'>16.00</th>
                <th scope="col" className='time'>17.00</th>
                <th scope="col" className='time'>18.00</th>
                <th scope="col" className='time'>19.00</th>
                <th scope="col" className='time'>20.00</th>

                </tr>
            </thead>
            <tbody>
            <tr className='rowday'>
                  <th scope="row" className='day lecture-cell' >Mon</th>
                    <td colSpan={1}></td>
                    <td colSpan={3}>{<Overlapping/>}</td>

                    <td colSpan={10}></td>

                </tr>
                <tr className='rowday'>
                <th scope="row" className='day'>Tue</th>
                    <td colSpan={1}></td>
                    <td colSpan={3}>{<Overlapping/>}</td>

                    <td colSpan={20}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Wed</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Thu</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Fri</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Sat</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Sun</th>
                  <td colSpan={15}></td>
                </tr>
            </tbody>
        </table>
      </table>
      <td>{arrayDataItems}</td>

      <div/>
    </div>

  
  );
  
};

export default Schedule;