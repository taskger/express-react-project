import React, { useState,useEffect  } from 'react';
import Axios from 'axios';
import "./filter.css";
import Overlapping from './overlapping';
import Lecturecorrect from './lecturecorrect';
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
  console.log(start_time)


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
                    getYearLabel={getYearLabel}
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
                    submit={submit}
                    edit={edit}
                    getYearLabel={getYearLabel}
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

export default Schedule;