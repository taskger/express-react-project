import React from 'react';

import "./filter.css";

const Filter = ({updateFirstYear }) => {
  const Checkbox = (event) => {
    const newFirstYearValue = event.target.checked;
    updateFirstYear(newFirstYearValue);
  };

  return (
    <div className='container'>
      <div className="container-fluid border">   
        <label className="rank" htmlFor="check1"> ตัวกรอง </label>
          <div className='liner' ></div>
          <div className='form-check-main'>
                <label className="rank" htmlFor="check1"> ชั้นปี 1 </label>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1" onChange={Checkbox}/>
                <label className="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
                <label className="rank" htmlFor="check1"> ชั้นปี 2 </label>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
                <label className="rank" htmlFor="check1"> ชั้นปี 3 </label>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
                <label className="rank" htmlFor="check1"> ชั้นปี 4 </label>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_sai" htmlFor="check1"> วิชาสาย </label>
              </div>
            </div>
          </div>

          <div className='liner' ></div>

          <div className='form-check-main'>
                <label className="rank" htmlFor="check1"> อาจารย์</label>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_main" htmlFor="check1"> อาจารย์1 </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check1"/>
                <label className="subject_sai" htmlFor="check1"> อาจารย์2 </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>

          


          <div className="col">
          </div>
          <div className="col">
          </div>
      </div>
    </div>
  );
};
export default Filter;