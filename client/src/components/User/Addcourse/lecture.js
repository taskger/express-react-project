import React from 'react';

const lecture = () => {
  return (
      <div>
        
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col-1 lecture">
          </div>
          <div className="col center">
            <label htmlFor="semester" className="form-label">ชื่อวิชา</label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="year" className="form-label" >รับจำนวน</label>
            <input type="text" class="form-control" id="InputStudents" />
            <label htmlFor="semester" className="form-label">หมู่เรียน</label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>กรุณาเลือกหมู่เรียน</option>
              <option value="801">801</option>
              <option value="802">802</option>
              <option value="803">803</option>
              <option value="804">804</option>
              <option value="805">805</option>
              <option value="806">806</option>
              <option value="807">807</option>
              <option value="808">808</option>
              <option value="809">809</option>
              <option value="810">810</option>
            </select>
            <label htmlFor="year" className="form-label">วัน</label>
            <select id="year" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected Disabled>กรุณาเลือกวัน</option>
              <option value="1">วันจัทนร์</option>
              <option value="2">วันอังคาร</option>
              <option value="3">วันพุธ</option>
              <option value="4">วันพฤหัสบดี</option>
              <option value="5">วันศุกร์</option>
              <option value="6">วันเสาร์</option>
              <option value="7">วันอาทิตย์</option>
            </select>
            <div class="cs-form">
            <div className='row'>
                <div className='col'>
                  <h7>เรื่มสอน</h7>
                  <input type="time" class="form-control "  />
                </div>                
                <div className='col'>
                  <h7>สิ้นสุดการสอน</h7>
                 <input type="time" class="form-control" />
                </div>
                
              </div>
            </div>
            <label htmlFor="year" className="StudentYear">ข้อจำกัดรายวิชา</label>

            <div>
              <div className='form-check form-check-inline'>
                <input class="form-check-input" type="checkbox" value="1" id="check1"/>
                <label class="form-check-label" htmlFor="check1"> ชั้นปี 1 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input class="form-check-input" type="checkbox" value="3" id="check3"/>
                <label class="form-check-label" htmlFor="check3"> ชั้นปี 2 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input class="form-check-input" type="checkbox" value="1" id="check1"/>
                <label class="form-check-label" htmlFor="check1"> ชั้นปี 3 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input class="form-check-input" type="checkbox" value="3" id="check3"/>
                <label class="form-check-label" htmlFor="check3"> ชั้นปี 4 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input class="form-check-input" type="checkbox" value="3" id="check3"/>
                <label class="form-check-label" htmlFor="check3"> ชั้นปีอื่นๆ </label>
              </div>
            </div>


            <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">วิชาหลัก</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label" for="inlineRadio2">วิชาเลือก</label>
            </div>
            
            <div className='row'>
            <div className="col ">
            </div>
            <div className="col ">
            <button type="submit" class="addlecture btn">เพิ่มหมู่บรรยาย</button>

            </div>
            <div className="col ">
            </div>
            </div>
            </div>
          </div>
          <div className="col-1">
          </div>
          <div className="col ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default lecture;
