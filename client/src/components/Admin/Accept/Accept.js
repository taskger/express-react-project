import React from 'react';
import './Accept.css'

const Accept = () => {
    return(
        <div className='box-accept'>
            <div className='in-accept'>
                <div className='img-accept'>
                    <img src="img/kaset.jpg" className='logo-accept' alt='sdsd'/>
                </div>
                <div className='kit-accept'/>
                <div className='name-accept'>
                    <h1 className='first-font-accept'> Name</h1>
                    <h1 className='sec-font-accept'> Surname</h1>
                </div>
                <div className='kit-accept'/>
                <div className='email-accept'>
                    <h1 className='three-font-accept'> asdasdas@gmai.com</h1>
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