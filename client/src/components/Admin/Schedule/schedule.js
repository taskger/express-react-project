import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../Navbar';
import Filter from '../../schedule-components/filter';
import Table from '../../schedule-components/table';
import "../../schedule-components/filter.css";
import * as XLSX from 'xlsx'; // Importing xlsx library

const Schedule = () => {
 //const [year, setYear] = useState(null);
  const [allyear, setAllyear] = useState([]);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [firstyear, setFirstYear] = useState(null);
  const [secondyear, setSecondYear] = useState(null);
  const [thirdyear, setThirdYear] = useState(null);
  const [fourthyear, setFourYear] = useState(null);
  const [main, setMain] = useState(null);
  const [sai, setSai] = useState(null);
  const [professer, setProfesser] = useState([]);
  const [listcourse, setListcourse] = useState([]);
  const [selectcourse, setSelectcourse] = useState([]);
  const [lecture, setLecture] = useState(null);
  const [practice, setPractice] = useState(null);


  const updateFirstYear = (newFirstYear) => {
    setFirstYear(newFirstYear);
  };
  const updateSecondYear = (newSecondYear) => {
    setSecondYear(newSecondYear);
  };
  const updateThirdYear = (newThirdYear) => {
    setThirdYear(newThirdYear);
  };
  const updateFourYear = (newFourYear) => {
    setFourYear(newFourYear);
  };
  const updateMain = (newMainValue) => {
    setMain(newMainValue);
  };
  const updateSai = (newSaiValue) => {
    setSai(newSaiValue);
  };
  const updateProfesser = (newProfesserValue) => {
    setProfesser(newProfesserValue);
  };
  const updateLecture = (newLectureValue) => {
    setLecture(newLectureValue);
  };
  const updatePractice = (newPracticeValue) => {
    setPractice(newPracticeValue);
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const currYear = new Date().getFullYear();
    const years = [];

    for (let i = (currYear+543)-3; i <= (currYear+543); i++) {
      years.push(i);
    }

    // Set the state with the array of years
    setAllyear(years);

  }, []);

  const handleExport = () => {
    if (year === null ) {
      Swal.fire({
        title: "ข้อมูลไม่ครบ",
        text: "กรุณาเลือกปีการศึกษา",
        icon: "warning"
      });
      return;
    }
    if (semester === null) {
      Swal.fire({
        title: "ข้อมูลไม่ครบ",
        text: "กรุณาเลือกภาคการศึกษา",
        icon: "warning"
      });
      return; // Prevent further processing if no data is available
    }else {
      Axios.get(`http://localhost:3000/readschedule/${year}.${semester}`)
    .then((response) => {
      if (response.status === 200) {
        // รับข้อมูลตารางเรียน
        const scheduleData = response.data.results;

        // ดึงข้อมูลจากตารางอื่น ๆ ที่ต้องการ เช่นข้อมูลวิชา
        Axios.get(`http://localhost:3000/readcourse/`)
          .then((response) => {
            if (response.status === 200) {
              const courseData = response.data.results;

              // ดำเนินการสร้างข้อมูลสำหรับไฟล์ Excel
              const excelData = scheduleData.map(scheduleItem => {
                const relatedCourse = courseData.find(courseItem => courseItem.subject === scheduleItem.subject);
                return {
                  'รหัสวิชา': relatedCourse ? relatedCourse.courseid : '',
                  'รหัสวิชาพ.ศ.หลักสูตร': relatedCourse ? `${relatedCourse.courseid}-${relatedCourse.year}`:'',
                  'ชื่อวิชา': scheduleItem.subject,
                  'หน่วยกิต': relatedCourse ? relatedCourse.credit : '',
                  'หน่วย': relatedCourse && scheduleItem.lecture == 1 ? relatedCourse.unit : '',
                  'จำนวนชม': relatedCourse && scheduleItem.lecture == 1 ? relatedCourse.hours : '',
                  'หมู่': scheduleItem.lecture == 1 ? scheduleItem.sec : '',
                  'วัน': scheduleItem.lecture == 1 ? scheduleItem.day : '',
                  'เริ่ม': scheduleItem.lecture == 1 ? scheduleItem.start_time : '',
                  '-': '-',
                  'สิ้นสุด': scheduleItem.lecture == 1 ? scheduleItem.end_time : '',
                  'ห้อง': scheduleItem.lecture == 1 ? scheduleItem.room : '',
                  'จำนวน': scheduleItem.lecture == 1 ? scheduleItem.num_students : '',
                  'หน่วย.': relatedCourse && scheduleItem.practice == 1 ? relatedCourse.unit : '',
                  'จำนวนชม.': relatedCourse && scheduleItem.practice == 1 ? relatedCourse.hour : '',
                  'หมู่.': scheduleItem.practice == 1 ? scheduleItem.sec : '',
                  'วัน.': scheduleItem.practice == 1 ? scheduleItem.day : '',
                  'เริ่ม.': scheduleItem.practice == 1 ? scheduleItem.start_time : '',
                  '-.': '-',
                  'สิ้นสุด.': scheduleItem.practice == 1 ? scheduleItem.end_time : '',
                  'ห้อง.': scheduleItem.practice == 1 ? scheduleItem.room : '',
                  'จำนวน.': scheduleItem.practice == 1 ? scheduleItem.num_students : '',
                  'อาจารย์': scheduleItem.professor,
                };
              });

              const startRow = 3;

              const wsData = XLSX.utils.json_to_sheet(excelData, {header:["รหัสวิชา", "รหัสวิชาพ.ศ.หลักสูตร", "ชื่อวิชา", "หน่วยกิต", "หน่วย", "จำนวนชม", "หมู่", "วัน", "เริ่ม", "-", "สิ้นสุด", "ห้อง", "จำนวน", "หน่วย.", "จำนวนชม.", "หมู่.", "วัน.", "เริ่ม.", "-.", "สิ้นสุด.", "ห้อง.", "จำนวน.", "อาจารย์"], origin: { r: startRow, c: 0 }});

              // Modify start row to row 5
  
              wsData['!merges'] = [
                // Merge cells from A2 to D4
                { s: { r: 0, c: 0 }, e: { r: 0, c: 22 } },
                { s: { r: 1, c: 0 }, e: { r: 1, c: 22 } },
                { s: { r: 2, c: 3 }, e: { r: 2, c: 12 } },
                { s: { r: 2, c: 13 }, e: { r: 2, c: 22 } },
              ];
  
              wsData['A1'] = { v: '                                                                                                                       ตารางเรียนคณะวิศวกรรมศาสตร์ ศรีราชา มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา', t: 's' };
              wsData['A2'] = { v: `                                                                                                                                                                 ประจำ ${semester} ปีการศึกษา ${year}`, t: 's' };
              wsData['D3'] = { v: '                                                                          บรรยาย', t: 's' };
              wsData['N3'] = { v: '                                                                          ปฏิบัติ', t: 's' };
  
              // Save the file
              const wb = XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(wb, wsData, "Sheet1");
              XLSX.writeFile(wb, "schedule.xlsx");
            }
          })
          .catch(error => {
            console.error('Error fetching course data:', error);
          });
      }
    })
    .catch(error => {
      console.error('Error fetching schedule data:', error);
    });
};

};

  return (
    <div>
    <Navbar/>

      <div className="container schedule">
        <div className="row ">
          <div className='col-auto left'>
          <button
            className="btn btn-primary"
            onClick={toggleFilter}
          >
            {isFilterOpen ? "ปิดตัวกรอง" : "เปิดตัวกรอง"}
          </button>
          </div>
        <div className="col-1">
          
            <label htmlFor="year" className="form-label">ปีการศึกษา</label>
          </div>
          <div className="col">
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
              onChange={(event) =>{setYear(event.target.value)}}>
              <option selected disabled>กรุณาเลือกปีการศึกษา</option>
              {allyear.map((e) => <option value={e} key={e}>{e}</option> )}
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="semester" className="form-label">ภาคการศึกษา</label>
          </div>
          
          <div className="col">
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
              onChange={(event) =>{setSemester(event.target.value)}}>
                <option selected disabled>กรุณาเลือกภาคการศึกษา</option>
                <option value="เทอมต้น">เทอมต้น</option>
                <option value="เทอมปลาย">เทอมปลาย</option>
                <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
            </select>
          </div>
        </div>

        <div className='col'>
          <button className="btn btn-primary" onClick={handleExport}>Export</button>
        </div>
        
        </div>
        <div className='row all com'>
          
        <div className="col-auto filter">
         

          {isFilterOpen && (
            <Filter
              updateFirstYear={updateFirstYear}
              updateSecondYear={updateSecondYear}
              updateThirdYear={updateThirdYear}
              updateFourYear={updateFourYear}
              updateMain={updateMain}
              updateSai={updateSai}
              updateProfesser={updateProfesser}
              updateLecture={updateLecture}
              updatePractice={updatePractice}
            />
          )}
        </div>

           <div className='col table'>
           <Table year={year} 
           semester={semester} 
           firstyear={firstyear} 
           secondyear={secondyear} 
           thirdyear={thirdyear} 
           fourthyear={fourthyear}
           main={main}
           sai={sai}
           professer={professer}
           lecturecheck={lecture}
           practicecheck={practice}
           />
    
            </div>


        </div>
    </div>
  )
};

export default Schedule;