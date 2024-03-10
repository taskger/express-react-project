import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "./filter.css";

const Overlapping = ({courseyear,overlappingLectures,stackdata,getYearLabel,setDay,setStart_time,setEnd_time,submit,edit}) => {
    const [overlapping, setShowoverlapping] = useState(false);
    const [editoverlapping, setShoweditoverlapping] = useState(false);
  
    const openSecondModal = () => {
      setShowoverlapping(false);
      setShoweditoverlapping(true);
    };
  
    const backToFirstModal = () => {
      setShoweditoverlapping(false);
      setShowoverlapping(true);
    };
  
    const closeCurrentModal = () => {
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
                    <Modal show={overlapping} onHide={() => setShowoverlapping(false)}>
                    <div className="modal-body">

                    <div className='row inoverlapping'>
                     <div className="btn-group" role="group" aria-label="Basic example">        
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target={`#staticBackdropTest-${currentCourse.id}`}
                                data-id={currentCourse.id}
                                data-subject={currentCourse.subject}
                                data-num_students={currentCourse.num_students}
                                data-sec={currentCourse.sec}
                                data-day={currentCourse.day}
                                data-start_time={currentCourse.start_time}
                                data-end_time={currentCourse.end_time}
                                onClick={(event) => {
                                    stackdata(event);
                                    openSecondModal();
                                }}>
                            <div className='subject'>{currentCourse.subject}</div>
                            <div className='name'>{`อ.${currentCourse.professor}`}</div>
                            <div className='time'>{`${currentCourse.start_time} - ${currentCourse.end_time}`}</div>
                            </button>
                        <button type="button" className="btn btn-danger bitrash" >
                          <span className="bi bi-trash overlapping"></span>
                        </button>
                          
                    </div>

                    </div>

                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeCurrentModal}>ปิดหน้าต่าง</button>
                    </div>
                    
                </Modal>

                <Modal show={editoverlapping} onHide={() => setShoweditoverlapping(false)}>
                    <div className="modal-body">
                    <label htmlFor="semester" className="form-label">ชื่อวิชา</label>
                        <select id="semester" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>                   
                    <label   label htmlFor="year" className="form-label" >รับจำนวน</label>
                    <input type="text" className="form-control" id="InputStudents" /> 
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
                    <div className="cs-form ">
                    <div className='row'>
                        <div className='col'>
                        <h7>เรื่มสอน</h7>
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
                        <h7>สิ้นสุดการสอน</h7>
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
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">ตกลง</button>
                        <button type="button" className="btn btn-secondary" onClick={backToFirstModal}>ย้อนกลับ</button>
                    </div>
                </Modal>
                </React.Fragment>

                ))}

        </div>

  
  );
  
};

export default Overlapping;