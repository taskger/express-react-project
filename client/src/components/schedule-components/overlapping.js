import React from 'react';
import "./filter.css";

const overlapping = () => {
  return (      

        <div className='overlapping'>
    <button type="button" class="btn editoverlapping" data-bs-toggle="modal" data-bs-target="#overlapping">

            มีวิชาซ้อนกัน
    </button>
<div class="modal fade" id="overlapping" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                    <div className='row inoverlapping'>
                    <div class="btn-group" role="group" aria-label="Basic example">        
                      <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div className='subject'>
                            LAB Software Enginering
                        </div>
                        <div className='name'>
                            อ.กาญจนา เอี่ยมสอาด
                        </div>
                        <div className='time'>
                            13.00 - 16.00
                        </div>
                      </button>
                        <button type="button" class="btn btn-danger bitrash" >
                          <span class="bi bi-trash"></span></button>
                    </div>

                    </div>
                    <div className='row inoverlapping'>
                    <div class="btn-group" role="group" aria-label="Basic example">        
                      <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div className='subject'>
                            LAB Software Enginering
                        </div>
                        <div className='name'>
                            อ.กาญจนา เอี่ยมสอาด
                        </div>
                        <div className='time'>
                            13.00 - 16.00
                        </div>
                      </button>
                      <button type="button" class="btn btn-danger bitrash" >
                          <span class="bi bi-trash"></span></button>
                    </div>
                    </div>

                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">ตกลง</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>

  
  );
  
};

export default overlapping;