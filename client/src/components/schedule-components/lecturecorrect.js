import React from 'react';
import "./filter.css";

const lecturecorrect = ({course,stackdata,getYearLabel,setDay,setStart_time,setEnd_time,submit,edit}) => {
  return (   
    <div key={course.id}>
                            <div className='lecturecorrect'>
                              <button
                                type="button"
                                className="btn editlecturecorrect"
                                data-bs-toggle="modal"
                                data-bs-target={`#staticBackdropTest-${course.id}`}
                                data-id={course.id}
                                data-subject={course.subject}
                                data-num_students={course.num_students}
                                data-sec={course.sec}
                                data-day={course.day}
                                data-start_time={course.start_time}
                                data-end_time={course.end_time}
                                onClick={(event) => { stackdata(event)}}>
                                <div className='subject'>
                                  {course.subject}
                                </div>
                                <div className='name'>
                                  อ.{course.professor}
                                </div>
                                <div className='time'>
                                  {course.start_time} - {course.end_time}
                                </div>
                              </button>
                            </div>
                          
                          
                          <div className="modal fade" id={`staticBackdropTest-${course.id}`} data-bs-backdrop="test" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-body">
                                      <div className='row cat'>
                                        <div className='col-auto left'>
                                          <div className='catagory'>
                                            {course.catagory}
                                          </div>
                                        </div>
                                        <div className='col-auto left'>
                                          <div className='yearstudents'>
                                            {getYearLabel(course)}
                                          </div>
                                        </div>
                                      </div>
                                    <label htmlFor="subject" className="form-label">ชื่อวิชา</label>
                                    <input id="subject" class="form-control" type="text" placeholder={course.subject} aria-label="Disabled input example" disabled/>

                                    <label htmlFor="sec" className="form-label">หมู่เรียน</label>

                                    <input id="sec" class="form-control" type="text" placeholder={course.sec} aria-label="Disabled input example" disabled/>

                                    <div className="cs-form ">
                                    <label className="form-label">วัน</label>
                                      <select 
                                        id="days" 
                                        className="form-select form-select-sm mb-3" 
                                        aria-label=".form-select-sm example"
                                        onChange={(event) =>{setDay(event.target.value);}}>
                                        <option selected >{course.day}</option>
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
                                            <option selected>{course.start_time}</option>
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
                                        
                                            <option selected>{course.end_time}</option>
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
                                          <div className='col'>
                                            <button type="button" className="btn btn-danger bitrash table" data-bs-dismiss="modal"
                                            onClick = {()=>{submit()}}>
                                              <span className="bi bi-trash table"></span>
                                            </button>
                                          </div>

                                            <button type="button" className="btn btn-primary" 
                                              defaultValue={course.id}
                                              onClick = { () => { edit()}}
                                              data-bs-dismiss="modal">
                                                ตกลง</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>


  
  );
  
};

export default lecturecorrect;