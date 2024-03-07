import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import Filter from '../../schedule-components/filter';
import Table from '../../schedule-components/table';
import "../../schedule-components/filter.css";
const Schedule = () => {
 //const [year, setYear] = useState(null);
  const [allyear, setAllyear] = useState([]);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [firstyear, setFirstYear] = useState(null);
  const updateFirstYear = (newFirstYear) => {
    setFirstYear(newFirstYear);
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


  return (
    <div>
    <Navbar/>

      <div className="container schedule">
        <div className="row ">
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
        </div>
        <div className='row all com'>
          
          <div className='col-auto filter'>
           <Filter updateFirstYear={updateFirstYear}/>
           </div>
           <div className='col table'>
           <Table year={year} semester={semester} firstyear={firstyear}/>
    
            </div>


        </div>
    </div>
    
      
    

  
  );
  
};

export default Schedule;