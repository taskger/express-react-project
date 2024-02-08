import React from 'react';
import Navbar from '../Navbar';
import "./schedule.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Schedule = () => {
  return (
    <div>
    <Navbar/>
      <div className="container">
        <div className="row ">
          <div className="col-1">
            <label htmlFor="semester" className="form-label">ภาคการศึกษา</label>
          </div>
          <div className="col">
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="year" className="form-label">ปีการศึกษา</label>
          </div>
          <div className="col">
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        </div>


        <div className="container-fluid border">    
          <div className='form-check-main'>
                <label class="rank" htmlFor="check1"> ชั้นปี 1 </label>
            <div class = "row">
              <div class = "col"> 
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div class = "row">
              <div class = "col">
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="form-checks" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>

          <div className='form-check-main'>
                <label class="rank" htmlFor="check1"> ชั้นปี 2 </label>
            <div class = "row">
              <div class = "col"> 
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div class = "row">
              <div class = "col">
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>

          <div className='form-check-main'>
                <label class="rank" htmlFor="check1"> ชั้นปี 3 </label>
            <div class = "row">
              <div class = "col"> 
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div class = "row">
              <div class = "col">
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>

          <div className='form-check-main'>
                <label class="rank" htmlFor="check1"> ชั้นปี 4 </label>
            <div class = "row">
              <div class = "col"> 
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div class = "row">
              <div class = "col">
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>

          


          <div className="col">
          </div>
          <div className="col">
          </div>
        </div>
        
      

    </div>
    
      
    

  
  );
  
};

export default Schedule;