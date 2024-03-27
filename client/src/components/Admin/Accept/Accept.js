import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Accept.css';

function Accept() {
    const [data, setData] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:3000/accept/${0}`)
            .then(response => {
                setData(response.data.results); // Assuming the response contains the data you need
                console.log(response.data); // Log the response data
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleConfirmation = (email) => {
        // ทำการอัปเดตค่าในข้อมูลเมื่อมีการคลิกปุ่ม "ยืนยัน"
        const updatedData = data.map(item => {
            if (item.email === email) {
                return { ...item, status: true }; // ทำการเปลี่ยนค่า status เป็น true
            }
            return item;
        });
        setData(updatedData); // อัปเดตข้อมูลใหม่ใน state
    
        // ส่งคำขอ POST เพื่อบันทึกการเปลี่ยนแปลงลงในฐานข้อมูล
        Axios.post(`http://localhost:3000/confirm/${email}`, { status: true })
            .then(response => {
                console.log("Confirmation successful:", response.data);
                window.location.reload(); // รีโหลดหน้าหลังจากการยืนยันเสร็จสิ้น
            })
            .catch(error => {
                console.error("Error confirming:", error);
            });
    };

    const handleDeleted = (email) => {
        // ทำการลบข้อมูลที่ต้องการออกจาก state
        const updatedData = data.filter(item => item.email !== email);
        setData(updatedData); // อัปเดตข้อมูลใหม่ใน state
    
        // ส่งคำขอ DELETE เพื่อลบข้อมูลออกจากฐานข้อมูล
        Axios.delete(`http://localhost:3000/delete/${email}`)
            .then(response => {
                console.log("Deletion successful:", response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error("Error deleting:", error);
            });
    };

    return (
        <div>
            {data ? (
                data.map(item => (
                    <div className='box-accept' key={item.id}>
                        <div className='in-accept'>
                            <div className='item-accept'>
                                <div className='img-accept'>
                                    <img className='logo-accept' src={item.img} alt='sdsd' />
                                </div>
                                <div className='kit-accept'/>
                                <div className='name-accept'>
                                    <h1 className='first-font-accept'>{item.name}</h1>
                                    <h1 className='sec-font-accept'>{item.surname}</h1>
                                </div>
                                <div className='kit-accept'/>
                                <div className='email-accept'>
                                    <h1 className='three-font-accept'>{item.email}</h1>
                                </div>
                                <div className='kit-accept'/>
                                <div className='button-accept'>
                                    <div>
                                        <button className='yan-accpet' onClick={() => handleConfirmation(item.email)}>ยืนยัน</button>
                                    </div>
                                    <div>
                                        <button className='yox-accpet' onClick={() => handleDeleted(item.email)}>ยกเลิก</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Accept;