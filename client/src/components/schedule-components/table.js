import React, { useState,useEffect  } from 'react';
import Axios from 'axios';
import "./filter.css";
import Overlapping from './overlapping';
import Lecturecorrect from './lecturecorrect';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

//ตัวกรอง
//ตาราง
//ถ้าวิชาซ้อนกัน
// export อาจต้องใส่หน่วยกิตใน table ของวิชา
const Table = ({year,semester,firstyear,secondyear,thirdyear,fourthyear,otheryear,main,sai,professer}) => {
  const [courseyear, setCourseYear] = useState(null); //เก็บหลักสูตรทั้งหมดที่ดึงมา
  const [id, setID] = useState(null);
  const [subject, setSubject] = useState(null);
  const [num_students, setNum_students] = useState(null);
  const [sec, setSec] = useState(null);
  const [day, setDay] = useState(null);
  const [start_time, setStart_time] = useState(null);
  const [end_time, setEnd_time] = useState(null);
  const [professor, setProfessor] = useState(null);
  
  const stackdata = (event) => {
    setID(event.currentTarget.getAttribute("data-id"));
    setSubject(event.currentTarget.getAttribute("data-subject"));
    setNum_students(event.currentTarget.getAttribute("data-num_students"));
    setProfessor(event.currentTarget.getAttribute("data-professor"));
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
    .then(() => {
      // Fetch updated data after the patch operation is successful
      return Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`);
    })
    .then(response => {
      // Filter the data based on the selected years and categories
      const filteredData = response.data.results.filter(course => {
        let filterCondition;
        console.log(course)
          if (!firstyear && !secondyear && !thirdyear && !fourthyear) {
              filterCondition = true; 
          } else if (firstyear && course.studentyear === "ชั้นปี 1") {
              filterCondition = true;
          } else if (secondyear && course.studentyear === "ชั้นปี 2") {
              filterCondition = true;
          } else if (thirdyear && course.studentyear === "ชั้นปี 3") {
              filterCondition = true;            

          } else if (fourthyear && course.studentyear === "ชั้นปี 4") {
              filterCondition = true;
          } else {
              filterCondition = false;
          }

          if (!professer.length) {
              filterCondition = filterCondition && true;
          } else if (professer.includes(course.professor)) {
            filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }

          if (!main && !sai) {
              filterCondition = filterCondition && true; // Display all courses if both main and sai are not selected
          } else if (main && course.catagory === "วิชาหลัก") {
              filterCondition = filterCondition && true;
          } else if (sai && course.catagory === "วิชาเลือก") {
              filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }
          if (!professer.length) {
              filterCondition = filterCondition && true;
          } else if (professer.includes(course.professor)) {
            filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }

          return filterCondition;
      });

      setCourseYear(filteredData);
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    if (year && semester) {
      Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`).then(response => {
        // Filter the data based on the selected years and categories
        const filteredData = response.data.results.filter(course => {
          let filterCondition;
          console.log(course)
            if (!firstyear && !secondyear && !thirdyear && !fourthyear) {
                filterCondition = true; 
            } else if (firstyear && course.studentyear === "ชั้นปี 1") {
                filterCondition = true;
            } else if (secondyear && course.studentyear === "ชั้นปี 2") {
                filterCondition = true;
            } else if (thirdyear && course.studentyear === "ชั้นปี 3") {
                filterCondition = true;            

            } else if (fourthyear && course.studentyear === "ชั้นปี 4") {
                filterCondition = true;
            } else {
                filterCondition = false;
            }

            if (!professer.length) {
                filterCondition = filterCondition && true;
            } else if (professer.includes(course.professor)) {
              filterCondition = filterCondition && true;
            } else {
                filterCondition = filterCondition && false;
            }

            if (!main && !sai) {
                filterCondition = filterCondition && true; // Display all courses if both main and sai are not selected
            } else if (main && course.catagory === "วิชาหลัก") {
                filterCondition = filterCondition && true;
            } else if (sai && course.catagory === "วิชาเลือก") {
                filterCondition = filterCondition && true;
            } else {
                filterCondition = filterCondition && false;
            }
            if (!professer.length) {
                filterCondition = filterCondition && true;
            } else if (professer.includes(course.professor)) {
              filterCondition = filterCondition && true;
            } else {
                filterCondition = filterCondition && false;
            }

            return filterCondition;
        });

        setCourseYear(filteredData);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [year, semester, firstyear, secondyear, thirdyear, fourthyear, main, sai,professer]);
  

  const deleteschedule = (id) => {
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
        let filterCondition;
        console.log(course)
          if (!firstyear && !secondyear && !thirdyear && !fourthyear) {
              filterCondition = true; 
          } else if (firstyear && course.studentyear === "ชั้นปี 1") {
              filterCondition = true;
          } else if (secondyear && course.studentyear === "ชั้นปี 2") {
              filterCondition = true;
          } else if (thirdyear && course.studentyear === "ชั้นปี 3") {
              filterCondition = true;            

          } else if (fourthyear && course.studentyear === "ชั้นปี 4") {
              filterCondition = true;
          } else {
              filterCondition = false;
          }

          if (!professer.length) {
              filterCondition = filterCondition && true;
          } else if (professer.includes(course.professor)) {
            filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }

          if (!main && !sai) {
              filterCondition = filterCondition && true; // Display all courses if both main and sai are not selected
          } else if (main && course.catagory === "วิชาหลัก") {
              filterCondition = filterCondition && true;
          } else if (sai && course.catagory === "วิชาเลือก") {
              filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }
          if (!professer.length) {
              filterCondition = filterCondition && true;
          } else if (professer.includes(course.professor)) {
            filterCondition = filterCondition && true;
          } else {
              filterCondition = filterCondition && false;
          }

          return filterCondition;
      });

      setCourseYear(filteredData);
    })
    .catch(error => {
      console.error(error);
    });
  }
  const submit = () => {
    Swal.fire({
      color:"#000",
      title: "กดยืนยันเพื่อลบข้อมูล",
      html: `วิชา: ${subject} <br>
      หมู่เรียน: ${sec} <br>
      ผู้สอน: ${professor} <br>
      ${day} ${start_time} - ${end_time}`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: `ยกเลิก`
    }).then((result) => {
      if (result.isConfirmed) {
        deleteschedule(id)
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        document.getElementById(`editlecturecorrect-${id}`).click();
      }
      });
    
  };

  const getStartColumnIndex = (start) => {
    // Calculate the column index based on the start time
    const startTime = parseInt(start.split(':')[0]);
    // Adjust the start time to match the table structure
    return startTime - 8; // Assuming the table starts at 8:00 AM
  };
  const getColSpan = (start, end) => {
    // Calculate the number of columns a lecture should span based on start and end times
    const startTime = parseInt(start.split(':')[0]);
    const endTime = parseInt(end.split(':')[0]);
    return endTime - startTime;
  };
  const thaiToEnglishDay = (thaiDay) => {
    const daysMapping = {
      'วันจันทร์': 'Mon',
      'วันอังคาร': 'Tue',
      'วันพุธ': 'Wed',
      'วันพฤหัสบดี': 'Thu',
      'วันศุกร์': 'Fri',
      'วันเสาร์': 'Sat',
      'วันอาทิตย์': 'Sun',
    };
  
    return daysMapping[thaiDay] || thaiDay;
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
            {['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'].map(thaiDay => (
              <tr key={thaiDay} className='rowday'>
                <th scope="row" className='day lecture-cell'>{thaiToEnglishDay(thaiDay)}</th>
                {[...Array(13)].map((_, index) => {
                  // ค้นหาวิชาที่ตรงกับวันที่กำหนดและซ้อนทับกับช่องเวลาปัจจุบัน
                  const coursesInSlot = courseyear && courseyear.filter(course => {
                    const startColumnIndex = getStartColumnIndex(course.start_time);
                    const endColumnIndex = startColumnIndex + getColSpan(course.start_time, course.end_time);
                    return course.day === thaiDay && index >= startColumnIndex && index < endColumnIndex;
                  });

                  // แสดงปุ่มเฉพาะเมื่อมีการเรียนทับซ้อนในช่องเวลานี้อย่างน้อยหนึ่งคอร์ส
                  if (coursesInSlot && coursesInSlot.length > 0) {
                    // เรียงลำดับการเรียนทับซ้อนตามเวลาเริ่มต้นและเวลาสิ้นสุด
                    const sortedCourses = coursesInSlot.sort((a, b) => {
                      if (a.start_time !== b.start_time) {
                        return a.start_time.localeCompare(b.start_time);
                      } else {
                        return b.end_time.localeCompare(a.end_time);
                      }
                    });

                    // แสดงแต่ละการเรียนทับซ้อน
                    return sortedCourses.map((course, idx) => {
                      const startColumnIndex = getStartColumnIndex(course.start_time);
                      const endColumnIndex = startColumnIndex + getColSpan(course.start_time, course.end_time);
                      const colSpan = endColumnIndex - index;

                      return (
                        idx === 0 && index === startColumnIndex && (
                          <td key={index} colSpan={colSpan}>
                            {coursesInSlot.length === 1 ? (
                              // แสดงคอมโพเนนท์ Lecturecorrect ถ้ามีเพียงคอร์สเดียว
                              <div className='sadsa'>

                              <Lecturecorrect
                                key={course.id}
                                course={course}
                                stackdata={stackdata}
                                setDay={setDay}
                                setStart_time={setStart_time}
                                setEnd_time={setEnd_time}
                                submit={submit}
                                edit={edit}
                              />
                              </div>

                            ) : (
                              // แสดงคอมโพเนนท์ Overlapping ถ้ามีการเรียนทับซ้อนมากกว่า 1 คอร์ส
                              <Overlapping
                                key={course.id}
                                course={course}
                                overlappingLectures={sortedCourses}
                                stackdata={stackdata}
                                setDay={setDay}
                                setStart_time={setStart_time}
                                setEnd_time={setEnd_time}
                                deleteschedule={deleteschedule}
                                edit={edit}
                                courseyear={courseyear}
                              />
                            )}

                          </td>
                        )
                      );
                    });
                  } else {
                    return <td key={index} colSpan={1}></td>; // ช่องว่างหากไม่มีการเรียนในช่องเวลานี้
                  }
                })}
              </tr>
            ))}
          </tbody>

        </table>
      </table>

      <div/>
    </div>

  
  );
  
};

export default Table;