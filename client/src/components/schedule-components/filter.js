import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./filter.css";

const Filter = ({updateFirstYear,updateSecondYear,updateThirdYear,updateFourYear,updateMain,updateSai,updateProfesser,updatePractice,updateLecture }) => {
  const Checkbox1 = (event) => {
    const newFirstYearValue = event.target.value;
    const newFirstYearcheck = event.target.checked;
    if (newFirstYearcheck){
      updateFirstYear(newFirstYearValue);
    }else{
      updateFirstYear(null);
    }
  };
  const Checkbox2 = (event) => {
    const newSecondYearValue = event.target.value;
    const newSecondYearcheck = event.target.checked;
    if (newSecondYearcheck){
      updateSecondYear(newSecondYearValue);
    }else{
      updateSecondYear(null);
    }
  };
  const Checkbox3 = (event) => {
    const newThirdYearValue = event.target.value;
    const newThirdYearcheck = event.target.checked;
    if (newThirdYearcheck){
      updateThirdYear(newThirdYearValue);
    }else{
      updateThirdYear(null);
    }
  };
  const Checkbox4 = (event) => {
    const newFourYearValue = event.target.value;
    const newFourYearcheck = event.target.checked;
    if (newFourYearcheck){
      updateFourYear(newFourYearValue);
    }else{
      updateFourYear(null);
    }
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
  const Checkboxlecture = (event) => {
    const newLectureValue = event.target.value;
    const newLecturecheck = event.target.checked;
    if (newLecturecheck){
      updateLecture(newLectureValue);
    }else{
      updateLecture(null);
    }
  };
  const Checkboxpractice = (event) => {
    const newPracticeValue = event.target.value;
    const newPracticecheck = event.target.checked;
    if (newPracticecheck){
      updatePractice(newPracticeValue);
    }else{
      updatePractice(null);
    }
  };
  const Checkboxprofesser = (event) => {
    const newProfesserValue = event.target.value;
    const newProfessercheck = event.target.checked;

    if (newProfessercheck) {
      updateProfesser(prevProfessors => [...prevProfessors, newProfesserValue]);
    } else {
      updateProfesser(prevProfessors => prevProfessors.filter(prof => prof !== newProfesserValue));
    }
  };
  const [data, setData] = useState(null);

  useEffect(() => {
      Axios.get(`https://projectschedule-server.vercel.app/accept/${1}`)
          .then(response => {
              setData(response.data.results);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);

  return (
    <div className='container'>
      <div className="container-fluid border">   
        <label className="rank" htmlFor="check1"> ตัวกรอง </label>
          <div className='liner' ></div>
          <div className='form-check-main'>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="ชั้นปี 1" id="check1" onChange={Checkbox1}/>
                <label className="subject_main" htmlFor="check1"> ชั้นปี 1 </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="ชั้นปี 2" id="check2" onChange={Checkbox2}/>
                <label className="subject_main" htmlFor="check2"> ชั้นปี 2 </label>
              </div>
            </div>
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="ชั้นปี 3" id="check3" onChange={Checkbox3}/>
                <label className="subject_main" htmlFor="check3"> ชั้นปี 3 </label>
              </div>
            </div>
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="ชั้นปี 4" id="check4" onChange={Checkbox4}/>
                <label className="subject_main" htmlFor="check4"> ชั้นปี 4 </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="วิชาหลัก" id="checkmain" onChange={Checkboxmain}/>
                <label className="subject_main" htmlFor="checkmain"> วิชาหลัก </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="วิชาเลือก" id="checksai" onChange={Checkboxsai}/>
                <label className="subject_sai" htmlFor="checksai"> วิชาเลือก </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          <div className='form-check-main'>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value="บรรยาย" id="checklecture" onChange={Checkboxlecture}/>
                <label className="subject_main" htmlFor="checklecture"> บรรยาย </label>
              </div>
            </div> 
            <div className = "row">
              <div className = "col">
                <input className="boxcheck" type="checkbox" value="ปฏิบัติ" id="checkpratice" onChange={Checkboxpractice}/>
                <label className="subject_sai" htmlFor="checkpratice"> ปฏิบัติ </label>
              </div>
            </div>
          </div>
          <div className='liner' ></div>
          
          {data?.map(item => (
          <div className='form-check-main' key={item.id}>
            <div className = "row">
              <div className = "col"> 
                <input className="boxcheck" type="checkbox" value={item.name + ' ' + item.surname} id={item.id} onChange={Checkboxprofesser}/>
                <label className="subject_main" htmlFor={item.id}> {item.name} {item.surname} </label>
              </div>
            </div> 
          </div>
          ))}

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