import React from 'react';
import "./schedule.css";

const filter = () => {
  return (
        <div className="container-fluid border">   
        <label class="rank" htmlFor="check1"> ตัวกรอง </label>
          <div className='liner' ></div>
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
                <label class="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
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
          <div className='liner' ></div>
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
          <div className='liner' ></div>
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

          <div className='liner' ></div>

          <div className='form-check-main'>
                <label class="rank" htmlFor="check1"> อาจารย์</label>
            <div class = "row">
              <div class = "col"> 
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_main" htmlFor="check1"> อาจารย์1 </label>
              </div>
            </div> 
            <div class = "row">
              <div class = "col">
                <input class="boxcheck" type="checkbox" value="1" id="check1"/>
                <label class="subject_sai" htmlFor="check1"> อาจารย์2 </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>

          


          <div className="col">
          </div>
          <div className="col">
          </div>
        </div>
  );
};
export default filter;