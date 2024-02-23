import React , {useState,useEffect } from 'react';

const Practice = ({sendData}) => {
  const [subject_practice, setSubject] = useState(null);
  const [num_students_practice, setNum_students] = useState(null);
  const [sec_practice, setSec] = useState(null);
  const [day_practice, setDay] = useState(null);
  const [start_time_practice, setStart_time] = useState(null);
  const [end_time_practice, setEnd_time] = useState(null);
  const [catagory_practice, setCatagory] = useState(null);
  const [firstyear_practice, setFirstyear] = useState(false);
  const [secondyear_practice, setSecondyear] = useState(false);
  const [thirdyear_practice, setThirdyear] = useState(false);
  const [fourthyear_practice, setFourthyear] = useState(false);
  const [otheryear_practice, setOtheryear] = useState(false);

  useEffect(() => {
    sendData({
      subject_practice,
      num_students_practice,
      sec_practice,
      day_practice,
      start_time_practice,
      end_time_practice,
      catagory_practice,
      firstyear_practice,
      secondyear_practice,
      thirdyear_practice,
      fourthyear_practice,
      otheryear_practice,
    });
  }, [subject_practice, num_students_practice, sec_practice, day_practice, start_time_practice, end_time_practice, catagory_practice,firstyear_practice,secondyear_practice,thirdyear_practice,fourthyear_practice,otheryear_practice,sendData]);
  return (
      <div>
        
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col center">
            <label htmlFor="subject" className="form-label">ชื่อวิชา<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="subject" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
              onChange={(event) =>{
                setSubject(event.target.value)
              }}>
              <option selected>Open this select menu</option>
              <option value="วิชาที่ 1">One</option>
              <option value="วิชาที่ 4 ">Two</option>
              <option value="วิชาที่ 3 ">Three</option>
            </select>
            <label htmlFor="num_students" className="form-label" >รับจำนวน<span className="form-required" title="This field is required.">*</span></label>
            <input 
              type="number" 
              className="form-control" 
              id="num_students" 
                onChange={(event) =>{
                  setNum_students(event.target.value)
                }}
              />
            <label htmlFor="sec" className="form-label">หมู่เรียน<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="sec" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
              onChange={(event) =>{
                setSec(event.target.value)
              }}
              >
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
            <label htmlFor="year" className="form-label">วัน<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="days" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
                onChange={(event) =>{
                  setDay(event.target.value)
                }}>
              <option selected Disabled>กรุณาเลือกวัน</option>
              <option value="วันจัทนร์">วันจัทนร์</option>
              <option value="วันอังคาร">วันอังคาร</option>
              <option value="วันพุธ">วันพุธ</option>
              <option value="วันพฤหัสบดี">วันพฤหัสบดี</option>
              <option value="วันศุกร์">วันศุกร์</option>
              <option value="วันเสาร์">วันเสาร์</option>
              <option value="วันอาทิตย์">วันอาทิตย์</option>

            </select>
            <div className="cs-form ">
              <div className='row'>
                <div className='col'>
                  <h7>เรื่มสอน<span className="form-required" title="This field is required.">*</span></h7>
                  <select 
                    id="starttime" 
                    className="form-select form-select-sm mb-3" 
                    aria-label=".form-select-sm example"
                    onChange={(event) =>{
                      setStart_time(event.target.value)
                    }}    >
                    <option selected>กรุณาเลือกเวลา</option>
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
                  <h7>สิ้นสุดการสอน<span className="form-required" title="This field is required.">*</span></h7>
                    <select 
                      id="end_time" 
                      className="form-select form-select-sm mb-3" 
                      aria-label=".form-select-sm example"
                      onChange={(event) =>{
                        setEnd_time(event.target.value)
                      }}>
                      <option selected>กรุณาเลือกเวลา</option>
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
            <label htmlFor="year" className="StudentYear">ข้อจำกัดรายวิชา<span className="form-required" title="This field is required.">*</span></label>

            <div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="checkbox" value="ชั้นปี 1" id="check1practice" 
                  name='check1practice' 
                  onChange={(event) =>{
                    setFirstyear(event.target.checked)
                  }}/>
                <label className="form-check-label" htmlFor="check1practice"> ชั้นปี 1 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="checkbox" value="ชั้นปี 2" id="check2practice" 
                name='check2practice' 
                onChange={(event) =>{
                  setSecondyear(event.target.checked)
                }}/>
                <label className="form-check-label" htmlFor="check2practice"> ชั้นปี 2 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="checkbox" value="ชั้นปี 3" id="check3practice" 
                name='check3practice'  
                onChange={(event) =>{
                  setThirdyear(event.target.checked)
                }}/>
                <label className="form-check-label" htmlFor="check3practice"> ชั้นปี 3 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="checkbox" value="ชั้นปี 4" id="check4practice" 
                name='check4practice'  
                onChange={(event) =>{
                  setFourthyear(event.target.checked)
                }}/>
                <label className="form-check-label" htmlFor="check4practice"> ชั้นปี 4 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="checkbox" value="ชั้นปีอื่นๆ" id="checkotherpractice"  
                name='checkotherpractice' 
                onChange={(event) =>{
                  setOtheryear(event.target.checked)
                }}/>
                <label className="form-check-label" htmlFor="checkotherpractice"> ชั้นปีอื่นๆ </label>
              </div>
            </div>


            <div>
            <div className="form-check form-check-inline ">
              <input 
                className="form-check-input" 
                type="radio" 
                name="inlineRadioOptionspractice" 
                id="optionmainpractice" 
                value="วิชาหลัก" 
                checked
                onChange={(event) =>{
                  setCatagory(event.target.value)
                }}/>
              <label className="form-check-label" for="optionmainpractice">วิชาหลัก</label>
            </div>

            <div className="form-check form-check-inline practice">
              <input 
                className="form-check-input" 
                type="radio" 
                name="inlineRadioOptionspractice" 
                id="optioncchoicepractice" 
                value="วิชาเลือก" 
                disabled
                onChange={(event) =>{
                  setCatagory(event.target.value)
                }}/>
              <label className="form-check-label" htmlFor="optioncchoicepractice">วิชาเลือก</label>
            </div>

            <div className='row'>
            <div className="col ">
            </div>
            <div className="col ">
            <button type="reset" class="resetaddcourse btn">ล้างข้อมูล</button>
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

export default Practice;
