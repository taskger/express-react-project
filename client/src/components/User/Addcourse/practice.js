import React , {useState,useEffect } from 'react';

const Practice = ({listcourse,sendData}) => {
  const [subject_practice, setSubject] = useState(null);
  const [num_students_practice, setNum_students] = useState(null);
  const [sec_practice, setSec] = useState(null);
  const [day_practice, setDay] = useState(null);
  const [start_time_practice, setStart_time] = useState(null);
  const [end_time_practice, setEnd_time] = useState(null);
  const [catagory_practice, setCatagory] = useState(null);
  const [studentyear, setStudentyear] = useState(null);
  const [allsec, setAllsec] = useState([]);

  useEffect(() => {
    const sec = [];
    for (let i = 830 ; i <= 870; i++) {
      sec.push(i);
    }
    setAllsec(sec);
  }, []);

  useEffect(() => {
    sendData({
      subject_practice,
      num_students_practice,
      sec_practice,
      day_practice,
      start_time_practice,
      end_time_practice,
      catagory_practice,
      studentyear
    });
  }, [subject_practice, num_students_practice, sec_practice, day_practice, start_time_practice, end_time_practice, catagory_practice,studentyear,sendData]);
    return (
      <div>
        
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col center">
            <label htmlFor="subject" className="form-label">ชื่อวิชาปฏิบัติ<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="subject" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
              onChange={(event) =>{
                setSubject(event.target.value)
              }}>
              <option selected>กรุณาเลือกรายวิชาปฏิบัติ</option>
              {Array.isArray(listcourse) && listcourse.map(listcourse =>
                <option key={listcourse.id} value={listcourse.subject}>{listcourse.subject}</option>
              )}
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
            <label htmlFor="sec" className="form-label">หมู่เรียนปฏิบัติ<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="sec" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
              onChange={(event) =>{
                setSec(event.target.value)
              }}
              >
              <option selected>กรุณาเลือกหมู่เรียนปฏิบัติ</option>
              {allsec.map((e) => <option value={e} key={e}>{e}</option> )}


            </select>
            <label htmlFor="year" className="form-label">วัน<span className="form-required" title="This field is required.">*</span></label>
            <select 
              id="days" 
              className="form-select form-select-sm mb-3" 
              aria-label=".form-select-sm example"
                onChange={(event) =>{
                  setDay(event.target.value)
                }}>
              <option selected>กรุณาเลือกวัน</option>
              <option value="วันจันทร์">วันจันทร์</option>
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
                  <h7>เริ่มสอน<span className="form-required" title="This field is required.">*</span></h7>
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
            <label htmlFor="year" className="StudentYear">ข้อจำกัดรายวิชาปฏิบัติ<span className="form-required" title="This field is required.">*</span></label>

            <div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" value="ชั้นปี 1" id="check1practice" 
                  name='checkpractice' 
                  onChange={(event) =>{
                    setStudentyear(event.target.value);
                  }}/>
                <label className="form-check-label" htmlFor="check1practice"> ชั้นปี 1 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" value="ชั้นปี 2" id="check2practice" 
                name='checkpractice' 
                onChange={(event) =>{
                  setStudentyear(event.target.value);
                }}/>
                <label className="form-check-label" htmlFor="check2practice"> ชั้นปี 2 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" value="ชั้นปี 3" id="check3practice" 
                name='checkpractice'  
                onChange={(event) =>{
                  setStudentyear(event.target.value);
                }}/>
                <label className="form-check-label" htmlFor="check3practice"> ชั้นปี 3 </label>
              </div>
              <div className='form-check form-check-inline'>
                <input className="form-check-input" type="radio" value="ชั้นปี 4" id="check4practice" 
                name='checkpractice'  
                onChange={(event) =>{
                  setStudentyear(event.target.value);
                }}/>

                <label className="form-check-label" htmlFor="check4practice"> ชั้นปี 4 </label>
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
