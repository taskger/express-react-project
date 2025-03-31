# bug
1.หลังเพิ่มรายวิชาแล้วจะขึ้น alert(ยังถึงวันลงทะเบียน)
2.รายวิชาปฎิบัติไม่แสดงในหน้า user จะแสดงแต่หน้า admin

# Project Schedule
## Features
- **User Feature**: เพิ่มรายวิชาที่ต้องการสอน, แก้ไขรายวิชาของตัวเอง, ลบรายวิชาของตัวเอง, แสดงรายวิชา, ดูรายวิชาในปีการศึกษาอื่น
- **Admin Feature**: กำหนดช่วงเวลาลงทะเบียนรายวิชา, เพิ่มข้อมูลหลักสูตร, อนุมัติผู้ใช้เข้าสู่ระบบ, ลบข้อมูลผู้ใช้, แสดงรายวิชา, แก้ไขและลบข้อมูลผู้ใช้ทุกคน
- **Additional Features**: การเข้าสู่ระบบด้วย Google,ตัวกรองแสดงรายวิชา,

## Technologies Used
- **Frontend**: [HTML, CSS ,JavaScript,React,Boostrap]
- **Backend**: [ode.js, Express]
- **Database**: [MySQL TiDB]


## Demo
คลิกที่ลิ้ง ([DEMO](https://portfolio-chayanon.vercel.app/)) เพื่อทดลองใช้งาน
## How to use
  ### Login
    \*สำหรับ User ที่เข้าสู่ระบบจะเก็บข้อมูล ชื่อ นามสกุล และ รูปภาพ ที่ใช้ภายใน Google เข้าสู่ Database\*
    1.เข้าสู่ระบบสถานะ User
      1.1 เข้าสู่ระบบผ่าน Google
      1.2 รอการยืนยันเข้าในหน้า Admin
      1.3 เมือยืนยันเสร็จสิ้นสามารถเข้าใช้งานได้
    2.เข้าสู่ระบบสถานะ Admin
      2.1 กรอก User:admin Pass:admin เพื่อเข้าสู่ระบบ
  ### User
    1.เข้าสู่ระบบผ่าน GOOGLE
    2.หน้าแรก
      2.1 แสดงข้อมูลระยะเวลาก่อนถึงวันลงทะเบียน
    3.หน้าตารางสอน 
      3.1 แสดงข้อมูลรายวิชาที่เพิ่ม
      3.2 เลือกปีการศึกษาที่ต้องการ
      3.3 เลือกภาคการศึกษาที่ต้องการ
      3.4 ตัวกรองเลือกแสดงเฉพาะข้อมูลที่ต้องการ
      3.5 ลบหรือแก้ไขรายวิชาของตัวเอง
    4.รูปโปรไฟล์
      4.1 ออกจากระบบ
  ### Admin
    1.เข้าสู่ระบบผ่าน User Pass
    2.หน้าจัดตารางสอน 
      2.1 แสดงข้อมูลรายวิชาในระบบทั้งหมด
      2.2 เลือกปีการศึกษาที่ต้องการ
      2.3 เลือกภาคการศึกษาที่ต้องการ
      2.4 ตัวกรองเลือกแสดงเฉพาะข้อมูลที่ต้องการ
      2.5 สามารถลบหรือแก้ไขทุกรายวิชา
    3.หน้านำเข้าหลักสูตร
      3.1 เลือกปีหลักสูตรที่ต้องการ
      3.2 เลือกไฟล์หลักสูตร
    4.หน้ากำหนดวันลงทะเบียน
      4.1 เลือกวันเริ่มลงทะเบียน
      4.2 เลือกวันสิ้นสุกลงทะเบียน
    5.หน้ารอการยืนยัน
      5.1 ผู้ใช้งานรอการยืนยัน
        5.1.1 คลิก 'ยืนยัน' เพื่อเพิ่มเข้าระบบ
        5.1.2 คลิก 'ยกเลิก' เพื่อลบออกจากระบบ
      5.2 ผู้ใช้งานในระบบ
        5.2.1 คลิก 'ลบ' เพื่อลบออกจากระบบ
    6.รูปโปรไฟล์
      6.1 ออกจากระบบ
### Database
#### courses (หลักสูตร)

| Column       | Type |  Length | Required |  Description | Sample | 
| -------- | -------- | -------- | -------- | -------- |--------|
| id (Primary) | int | 11 | Yes | ลำดับ | 1 |
| courseid  | varchar   | 255 | Yes | รหัสวิชา | 01204466 |
| subject | varchar    | 255 | Yes | ชื่อวิชา | Deep learning |
| credit    | int    | 11 | No | หน่วยกิต | 3 |
| unit    | int    | 11 | No | หน่วยกิต | 3 |
| year    | int    | 11 | No | ปีหลักสูตร | 2565 |

#### idUser
| Column    | Type |  Length | Required |  Description | Sample | 
| -------- | -------- | -------- | -------- | -------- |--------|
| id (Primary) | int | 11 | Yes | ลำดับ | 1 |
| name  | varchar   | 255 | Yes | ชื่อ | chayanon|
| surname | varchar    | 255 | Yes | นามสกุล | poolwas |
| email    | varchar    | 255 | Yes | อีเมล์ | chayanon.poolwas@gmail.com |
| img    | varchar    | 255 | No | รูป | https://lh3.googleusercontent.com/a/jo0FeiAlYi5qzkTKw=s96-c |
| role    | varchar    | 5 | No | ตำแหน่ง | user |
| status    | tinyint    | 1 | No | สถานะการอนุมัติ | 1 |

#### idadmin
| Column    | Type |  Length | Required |  Description | Sample | 
| -------- | -------- | -------- | -------- | -------- |--------|
| id (Primary) | int | 11 | Yes | ลำดับ | 1 |
| username  | varchar   | 255 | Yes | ชื่อผู้ใช้ | admin |
| password | varchar    | 255 | Yes | รหัสผ่าน | admin |
#### registration
| Column    | Type |  Length | Required |  Description | Sample | 
| -------- | -------- | -------- | -------- | -------- |--------|
| id (Primary) | int | 11 | Yes | ลำดับ | 1 |
| startdate  | date |  | No | วันเริ่มต้น | 2025-03-31|
| enddate | date    |  | No | วันสิ้นสุด | 2026-02-06 |
#### schedules
| Column    | Type |  Length | Required |  Description | Sample | 
| -------- | -------- | -------- | -------- | -------- |--------|
| id (Primary) | int | 11 | Yes | ลำดับ | 1 |
| year  | int   | 11 | No | ปีการศึกษา | 2568 |
| semester | varchar    | 255 | No | ภาคการศึกษา | เทอมต้น |
| professor    | varchar    | 255 | No | ชื่อ | chayanon poolwas |
| subject    | varchar    | 255 | No | ชื่อวิชา | Deep Learing |
| num_students    | int    | 11 | No | จำนวนผู้เรียน | 30 |
| sec    | varchar    | 255 | No | กลุ่มเรียน | 800 |
| room  | varchar   | 255 | No | ห้อง |  |
| day | varchar    | 255 | No | วัน | วันจันทร์ |
| start_time    | time    |  | No | วันเริ่มต้น | 09:00:00 |
| end_time    | time    |  | No | วันสิ้นสุด |12:00:00 |
| catagory    | varchar    | 255 | No | ประเภทวิชา | วิชาหลัก |
| lecture    | varchar    | 255 | No | วิชาบรรยาย | 1 |
| practice    | varchar    | 255 | No | วิชาปฏิบัติ | 0 |
| studentyear    | varchar    | 255 | No | ปีที่สามารถลงทะเบียน | ชั้นปี 2 |
