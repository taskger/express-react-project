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
const Schedule = ({year,semester,firstyear,secondyear,thirdyear,fourthyear,otheryear,main,sai,professer}) => {
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
  console.log(professer)
  
  const stackdata = (event) => {
    setID(event.currentTarget.getAttribute("data-id"));
    setSubject(event.currentTarget.getAttribute("data-subject"));
    setNum_students(event.currentTarget.getAttribute("data-num_students"));
    setSec(event.currentTarget.getAttribute("data-sec"));
    setDay(event.currentTarget.getAttribute("data-day"));
    setStart_time(event.currentTarget.getAttribute("data-start_time"));
    setEnd_time(event.currentTarget.getAttribute("data-end_time"));
  }
  console.log(day)


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
    .then(() => {
      // Fetch updated data after the patch operation is successful
      return Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`);
    })
    .then(response => {
      // Filter the data based on the selected years and categories
      const filteredData = response.data.results.filter(course => {
        const filterCondition =
          (!firstyear || course.firstyear) &&
          (!secondyear || course.secondyear) &&
          (!thirdyear || course.thirdyear) &&
          (!fourthyear || course.fourthyear) &&
          (!otheryear || course.otheryear) &&
          (!professer.length  || professer.includes(course.professor)) &&
          (
            (!main && !sai) ||  // Display all courses if both main and sai are not selected
            (main && course.catagory === "วิชาหลัก") ||
            (sai && course.catagory === "วิชาเลือก")
          );
  
        return filterCondition;
      });
  
      setCourseYear(filteredData);
    })
    .catch(error => {
      console.error(error);
    })
  };

  useEffect(() => {
    if (year && semester) {
      Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`).then(response => {
        // Filter the data based on the selected years and categories
        const filteredData = response.data.results.filter(course => {
          const filterCondition =
            (!firstyear || course.firstyear) &&
            (!secondyear || course.secondyear) &&
            (!thirdyear || course.thirdyear) &&
            (!fourthyear || course.fourthyear) &&
            (!otheryear || course.otheryear) &&
            (!professer.length  || professer.includes(course.professor)) &&
            (
              (!main && !sai) ||  // Display all courses if both main and sai are not selected
              (main && course.catagory === "วิชาหลัก") ||
              (sai && course.catagory === "วิชาเลือก")
            );
  
          return filterCondition;
        });
  
        setCourseYear(filteredData);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [year, semester, firstyear, secondyear, thirdyear, fourthyear, otheryear, main, sai,professer]);
  

  console.log(courseyear)
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
    .then(() => {
      // Fetch updated data after the patch operation is successful
      return Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`);
    })
    .then(response => {
      // Filter the data based on the selected years and categories
      const filteredData = response.data.results.filter(course => {
        const filterCondition =
          (!firstyear || course.firstyear) &&
          (!secondyear || course.secondyear) &&
          (!thirdyear || course.thirdyear) &&
          (!fourthyear || course.fourthyear) &&
          (!otheryear || course.otheryear) &&
          (!professer.length  || professer.includes(course.professor)) &&
          (
            (!main && !sai) ||  // Display all courses if both main and sai are not selected
            (main && course.catagory === "วิชาหลัก") ||
            (sai && course.catagory === "วิชาเลือก")
          );
  
        return filterCondition;
      });
  
      setCourseYear(filteredData);
    })
    .catch(error => {
      console.error(error);
    })
  };
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
    })
  };

  const getStartColumnIndex = (start) => {
    // Calculate the column index based on the start time
    const startTime = parseInt(start.split(':')[0]);
    // Adjust the start time to match the table structure
    return startTime - 8; // Assuming the table starts at 8:00 AM
  };
  const getTotalColSpan = (currentIndex, courseyear, thaiDay) => {
    let totalColSpan = 1;
  
    courseyear.forEach(course => {
      if (course.day === thaiDay) {
        const startColumnIndex = getStartColumnIndex(course.start_time);
        const colSpan = getColSpan(course.start_time, course.end_time);
  
        if (currentIndex >= startColumnIndex && currentIndex < startColumnIndex + colSpan) {
          totalColSpan = colSpan;
        }
      }
    });
  
    return totalColSpan;
  };
  const getColSpan = (start, end) => {
    // Calculate the number of columns a lecture should span based on start and end times
    const startTime = parseInt(start.split(':')[0]);
    const endTime = parseInt(end.split(':')[0]);
    return endTime - startTime;
  };
  const thaiToEnglishDay = (thaiDay) => {
    const daysMapping = {
      'วันจัทนร์': 'Mon',
      'วันอังคาร': 'Tue',
      'วันพุธ': 'Wed',
      'วันพฤหัสบดี': 'Thu',
      'วันศุกร์': 'Fri',
      'วันเสาร์': 'Sat',
      'วันอาทิตย์': 'Sun',
    };
  
    return daysMapping[thaiDay] || thaiDay;
  };
  const getYearLabel = (course) => {
    if (course.firstyear) {
      return 'ชั้นปีที่ 1';
    } else if (course.secondyear) {
      return 'ชั้นปีที่ 2';
    } else if (course.thirdyear) {
      return 'ชั้นปีที่ 3';
    } else if (course.fouryear) {
      return 'ชั้นปีที่ 4';
    } else if (course.otheryear) {
      return 'ชั้นปีอื่นๆ';
    }
  };

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
              {['วันจัทนร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'].map(thaiDay => (
                <tr key={thaiDay} className='rowday'>
                  <th scope="row" className='day lecture-cell'>{thaiToEnglishDay(thaiDay)}</th>
                  {[...Array(13)].map((_, index) => (
                    <td
                      key={index}
                      colSpan={1}
                    >
                      {courseyear && courseyear.map(course => {
                        if (course.day === thaiDay) {
                          const startColumnIndex = getStartColumnIndex(course.start_time);
                          if (index >= startColumnIndex && index < startColumnIndex + getColSpan(course.start_time, course.end_time)) {
                            return (
                          <div key={course.id}>
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
                                data-day={course.day}
                                data-start_time={course.start_time}
                                data-end_time={course.end_time}
                                onClick={(event) => { stackdata(event)}}>
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
                          
                          
                          <div className="modal fade" id={`staticBackdropTest-${course.id}`} data-bs-backdrop="test" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-body">
                                      <div className='row'>
                                        <div className='col-auto left'>
                                          <div className='catagory'>
                                            {course.catagory}
                                          </div>
                                        </div>
                                        <div className='col-auto left'>
                                          <div className='yearstudents'>
                                            {getYearLabel(course)}
                                          </div>
                                        </div>
                                      </div>
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
                      }
                    }
                    return null;
                  })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        </table>
      </table>

      <div/>
    </div>

  
  );
  
};

export default Schedule;