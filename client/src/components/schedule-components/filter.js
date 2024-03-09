import React from 'react';

import "./filter.css";

const Filter = ({updateFirstYear,updateSecondYear,updateThirdYear,updateFourYear,updateOtherYear,updateMain,updateSai }) => {
  const Checkbox1 = (event) => {
    const newFirstYearValue = event.target.checked;
    updateFirstYear(newFirstYearValue);
  };
  const Checkbox2 = (event) => {
    const newSecondYearValue = event.target.checked;
    updateSecondYear(newSecondYearValue);
  };
  const Checkbox3 = (event) => {
    const newThirdYearValue = event.target.checked;
    updateThirdYear(newThirdYearValue);
  };
  const Checkbox4 = (event) => {
    const newFourYearValue = event.target.checked;
    updateFourYear(newFourYearValue);
  };
  const Checkbox5 = (event) => {
    const newOtherYearValue = event.target.checked;
    updateOtherYear(newOtherYearValue);
  };
  const Checkboxmain = (event) => {
    const newMainValue = event.target.value;
    const newMaincheck = event.target.checked;
    if (newMaincheck){
      updateMain(newMainValue);
    }else{
      updateMain(null);
    }
  };
  const Checkboxsai = (event) => {
    const newSaiValue = event.target.value;
    const newSaicheck = event.target.checked;
    if (newSaicheck){
      updateSai(newSaiValue);
    }else{
      updateSai(null);
    }
  };

  return (
    <div className='container'>
      <div className="container-fluid border">   
        <label className="rank" htmlFor="check1"> ตัวกรอง </label>
          <div className='liner' ></div>
          <div className='form-check-main'>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="1" id="check1" onChange={Checkbox1}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปี 1 </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check2" onChange={Checkbox2}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปี 2 </label>
              </div>
            </div>
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check3" onChange={Checkbox3}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปี 3 </label>
              </div>
            </div>
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check4" onChange={Checkbox4}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปี 4 </label>
              </div>
            </div>
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="1" id="check4" onChange={Checkbox5}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปีอื่นๆ </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="วิชาหลัก" id="check1" onChange={Checkboxmain}/>
                <label className="subject_main" htmlFor="check1"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="วิชาเลือก" id="check1" onChange={Checkboxsai}/>
                <label className="subject_sai" htmlFor="check1"> วิชาเลือก </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          

          <div className='form-check-main'>
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