import React from 'react';

const practice = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>

          <div className="col center">
            <label htmlFor="semester" className="form-label">ชื่อวิชา<span class="form-required" title="This field is required.">*</span></label>
            <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="year" className="form-label">รับจำนวน<span class="form-required" title="This field is required.">*</span></label>
            <input type="text" class="form-control" id="InputStudents" />
            <label htmlFor="semester" className="form-label">หมู่เรียน<span class="form-required" title="This field is required.">*</span></label>
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
            <label htmlFor="year" className="form-label">วัน<span class="form-required" title="This field is required.">*</span></label>
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
                  <h7>เรื่มสอน<span class="form-required" title="This field is required.">*</span></h7>
                  <select id="starttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                    <option selected>กรุณาเลือกเวลา</option>
                    <option value="0800">08.00</option>
                    <option value="0830">08.30</option>
                    <option value="0900">09.00</option>
                    <option value="0930">09.30</option>
                    <option value="1000">10.00</option>
                    <option value="1030">10.30</option>
                    <option value="1100">11.00</option>
                    <option value="1130">11.30</option>
                    <option value="1200">12.00</option>
                    <option value="1230">12.30</option>
                    <option value="1300">13.00</option>
                    <option value="1330">13.30</option>
                    <option value="1400">14.00</option>
                    <option value="1430">14.30</option>
                    <option value="1500">15.00</option>
                    <option value="1530">15.30</option>
                    <option value="1600">16.00</option>
                    <option value="1630">16.30</option>
                    <option value="1700">17.00</option>
                    <option value="1730">17.30</option>
                    <option value="1800">18.00</option>
                    <option value="1830">18.30</option>
                    <option value="1900">19.00</option>
                    <option value="1930">19.30</option>
                    <option value="2000">20.00</option>
                  </select>
                </div>                
                <div className='col'>
                  <h7>สิ้นสุดการสอน<span class="form-required" title="This field is required.">*</span></h7>
                    <select id="endttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                      <option selected>กรุณาเลือกเวลา</option>
                      <option value="0800">08.00</option>
                      <option value="0830">08.30</option>
                      <option value="0900">09.00</option>
                      <option value="0930">09.30</option>
                      <option value="1000">10.00</option>
                      <option value="1030">10.30</option>
                      <option value="1100">11.00</option>
                      <option value="1130">11.30</option>
                      <option value="1200">12.00</option>
                      <option value="1230">12.30</option>
                      <option value="1300">13.00</option>
                      <option value="1330">13.30</option>
                      <option value="1400">14.00</option>
                      <option value="1430">14.30</option>
                      <option value="1500">15.00</option>
                      <option value="1530">15.30</option>
                      <option value="1600">16.00</option>
                      <option value="1630">16.30</option>
                      <option value="1700">17.00</option>
                      <option value="1730">17.30</option>
                      <option value="1800">18.00</option>
                      <option value="1830">18.30</option>
                      <option value="1900">19.00</option>
                      <option value="1930">19.30</option>
                      <option value="2000">20.00</option>
                    </select>                
                </div>
                
              </div>
            </div>
            <label htmlFor="year" className="StudentYear">ข้อจำกัดรายวิชา<span class="form-required" title="This field is required.">*</span></label>

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
            <button type="submit" class="btn addlecture">เพิ่มหมู่ปฏิบัติ</button>

            </div>
            <div className="col ">
            </div>
            </div>
            </div>
          </div>
          <div className="col ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default practice;
