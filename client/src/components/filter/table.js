import React from 'react';
import "./filter.css";

const Schedule = () => {
  return (      
    <div>

        <table class="table table-bordered schedule ">
            <thead>
                <tr>
                <th scope="col" ></th>
                <th scope="col" className='time'>08.00</th>
                <th scope="col" className='time'>10.00</th>
                <th scope="col" className='time'>12.00</th>
                <th scope="col" className='time'>14.00</th>
                <th scope="col" className='time'>16.00</th>
                <th scope="col" className='time'>18.00</th>
                <th scope="col" className='time'>20.00</th>
                <th scope="col" ></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className='day'>Mon</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
                <tr>
                <th scope="row" className='day'>Tue</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
                <tr>
                <th scope="row" className='day'>Wed</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
                <tr>

                <th scope="row" className='day'>Thu</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>

                <tr>
                <th scope="row" className='day'>Fri</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
                <tr>
                <th scope="row" className='day'>Sat</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
                <tr>
                <th scope="row" className='day'>Sun</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>

            </tbody>
        </table>
    </div>

  
  );
  
};

export default Schedule;