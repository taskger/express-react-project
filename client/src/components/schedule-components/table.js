import React from 'react';
import "./filter.css";
import Overlapping from './overlapping';
import Lecturecorrect from './lecturecorrect';
const Schedule = () => {
  return (      
    <div>
      <table class="table table-bordered outschedule">
        <table class="table table-bordered schedule  ">
            <thead class="theadtable">
                <tr>
                <th scope="col" className='time'></th>
                <th scope="col" className='time'>08.00</th>
                <th scope="col" className='time'>09.00</th>
                <th scope="col" className='time'>10.00</th>
                <th scope="col" className='time'>11.00</th>
                <th scope="col" className='time'>12.00</th>
                <th scope="col" className='time'>13.00</th>
                <th scope="col" className='time'>14.00</th>
                <th scope="col" className='time'>15.00</th>
                <th scope="col" className='time'>16.00</th>
                <th scope="col" className='time'>17.00</th>
                <th scope="col" className='time'>18.00</th>
                <th scope="col" className='time'>19.00</th>
                <th scope="col" className='time'>20.00</th>
                <th scope="col" className='time'>21.00</th>

                </tr>
            </thead>
            <tbody>
            <tr className='rowday'>
                  <th scope="row" className='day lecture-cell' >Mon</th>
                    <td colSpan={1}></td>
                    <td colSpan={3}>{<Overlapping/>}</td>
                    <td colSpan={1}></td>

                    <td colSpan={2}>{<Lecturecorrect/>}</td>
                    <td colSpan={8}></td>

                </tr>
                <tr className='rowday'>
                <th scope="row" className='day'>Tue</th>
                    <td colSpan={1}></td>
                    <td colSpan={3}>{<Overlapping/>}</td>
                    <td colSpan={1}></td>

                    <td colSpan={3}>{<Lecturecorrect/>}</td>
                    <td colSpan={7}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Wed</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Thu</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Fri</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Sat</th>
                  <td colSpan={15}></td>

                </tr>
                <tr className='rowday'>
                  <th scope="row" className='day'>Sun</th>
                  <td colSpan={15}></td>
                </tr>
            </tbody>
        </table>
      </table>

      <div/>
    </div>

  
  );
  
};

export default Schedule;