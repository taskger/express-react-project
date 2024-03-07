import React, { Profiler } from 'react';
import './Accept.css'
import { useState } from 'react';
import { gapi } from "gapi-script";

function Accept () {
    const {profile,setProfile} = useState(0)
    return(
        <div className='box-accept'>
            <div className='in-accept'>
                <div className='img-accept'>
                    <img className='logo-accept'  alt='sdsd'/>
                </div>
                <div className='kit-accept'/>
                <div className='name-accept'>
                    <h1 className='first-font-accept'>  </h1>
                    <h1 className='sec-font-accept'> </h1>
                </div>
                <div className='kit-accept'/>
                <div className='email-accept'>
                    <h1 className='three-font-accept'> </h1>
                </div>
                <div className='kit-accept'/>
                <div className='button-accept'>
                    <div>
                        <button className='yan-accpet'>ยืนยัน</button>
                    </div>
                    <div>
                        <button className='yox-accpet'>ยกเลิก</button>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Accept;