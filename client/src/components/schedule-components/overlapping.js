import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "./filter.css";

const Overlapping = ({ courseyear, overlappingLectures, stackdata, getYearLabel, setDay, setStart_time, setEnd_time, submit, edit }) => {
    const [showFirstModal, setShowoverlapping] = useState(false);
    const [showSecondModal, setShoweditoverlapping] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
  
    const openSecondModal = (id) => {
      setSelectedCourseId(id);
      setShowoverlapping(false);
      setShoweditoverlapping(true);
    };
    const backToFirstModal = () => {
        setShoweditoverlapping(false);
        setShowoverlapping(true);
      };
    const closeAllModals = () => {
      setShowoverlapping(false);
      setShoweditoverlapping(false);
    };

    
    return (      
      <div className='overlapping'>
        <button type="button" className="btn editoverlapping" onClick={() => setShowoverlapping(true)}>
          มีวิชาซ้อนกัน
        </button>
        {courseyear.map((currentCourse) => (
          <React.Fragment key={currentCourse.id}>
            <Modal show={showFirstModal} onHide={closeAllModals}>
              <div className="modal-body">
                {overlappingLectures && overlappingLectures.map((lecture) => (
                  <div className='row inoverlapping' key={lecture.id}>
                    <div className="btn-group" role="group" aria-label="Basic example">        
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-id={lecture.id}
                        data-subject={lecture.subject}
                        data-num_students={lecture.num_students}
                        data-sec={lecture.sec}
                        data-day={lecture.day}
                        data-start_time={lecture.start_time}
                        data-end_time={lecture.end_time}
                        onClick={(event) => {
                            stackdata(event);
                            openSecondModal(lecture.id);
                        }}>
                        <div className='subject'>{lecture.subject}</div>
                        <div className='name'>{`อ.${lecture.professor}`}</div>
                        <div className='time'>{`${lecture.start_time} - ${lecture.end_time}`}</div>
                      </button>
                      <button type="button" className="btn btn-danger bitrash" 
                                onClick = {()=>{submit()}}>
                        <span className="bi bi-trash overlapping"></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeAllModals}>ปิดหน้าต่าง</button>
              </div>
            </Modal>

            
            <Modal show={showSecondModal && selectedCourseId === currentCourse.id} onHide={closeAllModals}>
              <div className="modal-body">
                                      <div className='row cat'>
                                        <div className='col-auto left'>
                                          <div className='catagory'>
                                            {currentCourse.catagory}
                                          </div>
                                        </div>
                                        <div className='col-auto left'>
                                          <div className='yearstudents'>
                                            {getYearLabel(currentCourse)}
                                          </div>
                                        </div>
                                      </div>

                                    <label htmlFor="subject" className="form-label ">ชื่อวิชา</label>
                                    <input id="subject" class="form-control" type="text" placeholder={currentCourse.subject} aria-label="Disabled input example" disabled/>

                                    <label htmlFor="sec" className="form-label">หมู่เรียน</label>

                                    <input id="sec" class="form-control" type="text" placeholder={currentCourse.sec} aria-label="Disabled input example" disabled/>

                                    <div className="cs-form ">
                                    <label className="form-label">วัน</label>
                                      <select 
                                        id="days" 
                                        className="form-select form-select-sm mb-3" 
                                        aria-label=".form-select-sm example"
                                        onChange={(event) =>{setDay(event.target.value);}}>
                                        <option selected >{currentCourse.day}</option>
                                        <option value="วันจัทนร์">วันจัทนร์</option>
                                        <option value="วันอังคาร">วันอังคาร</option>
                                        <option value="วันพุธ">วันพุธ</option>
                                        <option value="วันพฤหัสบดี">วันพฤหัสบดี</option>
                                        <option value="วันศุกร์">วันศุกร์</option>
                                        <option value="วันเสาร์">วันเสาร์</option>
                                        <option value="วันอาทิตย์">วันอาทิตย์</option>
                                      </select>
                                    <div className='row'>
                                        <div className='col'>
                                        <h7>เริ่มสอน</h7>
                                        <select id="starttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
                                        onChange={(event) =>{setStart_time(event.target.value);}}>
                                            <option selected>{currentCourse.start_time}</option>
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
                                        <h7>สิ้นสุดการสอน</h7>
                                            <select id="endttime" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example"
                                        onChange={(event) =>{setEnd_time(event.target.value);}}>
                                        
                                            <option selected>{currentCourse.end_time}</option>
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
                                    
                                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary"
                    onClick = { () => { edit()}}>ตกลง</button>
                <button type="button" className="btn btn-secondary" onClick={() => backToFirstModal(true)}>ย้อนกลับ</button>
              </div>
            </Modal>
          </React.Fragment>
        ))}
      </div>
    );
};

export default Overlapping;