var express = require('express');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require ('body-parser');
var path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const { request } = require('http');
const saltRounds = 10; // จำนวนรอบในการผสม
const xlsx = require("xlsx");
app.use(express.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie : {
        maxAge : 600000
    }
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client' , 'src' , 'components' , 'Admin' , 'Home')));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'se',
    port: 3307
    
})

app.post('/check', async (request, response) => {
    const { username, password } = request.body;
    console.log("Received username:", username);
    console.log("Received password:", password);
    if (username && password) {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            connection.query("SELECT * FROM idadmin WHERE BINARY username = ?", [username], async (err, results, fields) => {
                console.log("Stored hashed password:", results[0].password);
                console.log("Entered hashed password:", hashedPassword);
                if (err) {
                    console.log("Error executing query:", err);
                    return response.status(500).send('Internal Server Error');
                }
                if (results.length > 0) {
                    const match = await bcrypt.compare(password, results[0].password);
                    console.log("bcrypt.compare result:", match);
                    if (match) {
                        request.session.loggedin = true;
                        request.session.username = username;
                        return response.status(200).json({ results });
                        

                    } else {
                        return response.status(403).send('Invalid username or password');
                    }
                } else {
                    return response.status(403).send('Invalid username or password');
                }
            });
        } catch (error) {
            console.log("Error hashing password:", error);
            return response.status(500).send('Internal Server Error');
        }
    } else {
        return response.status(400).send('Please enter username and password');
    }
});

function setAutoLogout() {
    // ตั้งค่าเวลาหมดอายุของเซสชันเป็น 10 นาที (10 * 60 * 1000 milliseconds)
    req.session.cookie.expires = new Date(Date.now() + 5 * 60 * 1000);
}

app.post("/google", async (req, res) =>{
    const {Name, Surname, e_mail, Img, Role, Status} = req.body;
    try {
        // ตรวจสอบว่าอีเมล์ที่เข้ามาซ้ำกับข้อมูลที่มีอยู่แล้วหรือไม่
        connection.query(
            "SELECT * FROM idUser WHERE email = ?",
            [e_mail],
            async (err, results, fields) => {
                if (err) {
                    console.log("Error while checking for duplicate email:", err);
                    return res.status(400).send();
                }
                // ถ้ามีอีเมล์ที่ซ้ำกันในฐานข้อมูล
                if (results.length > 0) {
                    console.log(results,"Email already exists in the database");
                    if(results[0].status === 0 ) {
                        console.log("กรุณาการยืนยัน")
                        
                        return res.status(204).json({ results });
                    }else if (results[0].status === 1 ) {
                        console.log("เข้าสู้ระบบสำเร็จ")

                        return res.status(200).json({ results });
                    }
                } else {
                    // ถ้าไม่มีอีเมล์ที่ซ้ำกันในฐานข้อมูล ให้ทำการเพิ่มข้อมูลเข้าฐานข้อมูล
                    connection.query(
                        "INSERT INTO idUser(name, surname , email , img , role, status) VALUES(?,?,?,?,?,?)",
                        [Name, Surname, e_mail, Img, Role, Status],
                        (err, results, fields) => {
                            if (err) {
                                console.log("Error while inserting a user into the database", err);
                                return res.status(400).send();
                            }
                            // เมื่อเพิ่มข้อมูลสำเร็จ ให้ตั้งค่าการล็อกเอาต์อัตโนมัติ
                            
                            return res.status(201).json({ message: "New user successfully created!" });
                        }
                    );
                }
            }
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

app.get("/accept/:status", async (req,res) => {
    const { status } = req.params;   
    try {
        connection.query("SELECT * FROM idUser WHERE status = ? ", [status], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({ results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการทำลายเซสชัน:', err);
            res.status(500).send('ข้อผิดพลาดของเซิร์ฟเวอร์');
        } else {
            res.redirect('/'); // ให้เรียกหน้าล็อกอินหลังจากการออกจากระบบ
        }
    });
});

app.patch("/user/regis", async (req,res) => {
    const { 
        startdate ,
        enddate
        } = req.body;
    try {
        connection.query("UPDATE registration SET startdate = ?, enddate = ?",
        [ 
            startdate ,
            enddate
        ]
        , (err, results,fields) =>{
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/user/readregis", async (req,res) => {
    try {
        connection.query("SELECT * FROM registration", (err, results,fields) =>{
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

app.post('/confirm/:email', (req, res) => {
    const email = req.params.email;
    const status = req.body.status;
    try {
        // สมมติว่าตาราง idUser มีฟิลด์ email เป็น primary key
        connection.query("UPDATE idUser SET status = ? WHERE email = ? ", [status, email], (err, results, fields) => {
            if (err) { 
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

app.delete('/delete/:email', async (req, res) => {
    const { email } = req.params;  
    try {
        connection.query(`DELETE FROM idUser WHERE email = ?`, email, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})





app.post("/user/addcourse/createlecture", async (req, res) => {
    const { 
         year_lecture,
         semester_lecture ,
         professor_lecture , 
         subject_lecture , 
         num_students_lecture , 
         sec_lecture , 
         classroom_lecture ,
         day_lecture , 
         start_time_lecture , 
         end_time_lecture ,
         catagory_lecture,
         lecture,
         studentyear_lecture , 
         } = req.body;

    try{
        connection.query(
            "INSERT INTO schedules(year, semester , professor , subject, num_students, sec,room, day, start_time, end_time, catagory ,lecture,studentyear) VALUES(?,?,?,?,?,?,?,?, ?,?,?, ?, ?)",
            [ 
                year_lecture,
                semester_lecture ,
                professor_lecture , 
                subject_lecture , 
                num_students_lecture , 
                sec_lecture , 
                classroom_lecture ,
                day_lecture , 
                start_time_lecture , 
                end_time_lecture ,
                catagory_lecture,
                lecture,
                studentyear_lecture
            ],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New course successfully created!"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})
app.post("/user/addcourse/createpractice", async (req, res) => {
    const { 
         year_practice,
         semester_practice ,
         professor_practice , 
         subject_practice , 
         num_students_practice , 
         sec_practice , 
         classroom_practice,
         day_practice , 
         start_time_practice , 
         end_time_practice ,
         catagory_practice,
         practice ,
         studentyear_practice,
         } = req.body;

    try{
        connection.query(
            "INSERT INTO schedules(year, semester , professor , subject, num_students, sec,room, day, start_time, end_time, catagory ,practice,studentyear) VALUES(?,?,?,?,?,?,?,?, ?,?, ?, ?, ?)",
            [ 
                year_practice,
                semester_practice ,
                professor_practice , 
                subject_practice , 
                num_students_practice , 
                sec_practice , 
                classroom_practice,
                day_practice , 
                start_time_practice , 
                end_time_practice ,
                catagory_practice,
                practice ,
                studentyear_practice
            ],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New course successfully created!"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})
app.get("/readcourse", async (req,res) => {

    try {
        connection.query("SELECT * FROM courses", (err, results,fields) =>{
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})
app.get("/readschedule", async (req,res) => {

    try {
        connection.query("SELECT * FROM schedules", (err, results,fields) =>{
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/readschedule/:year.:semester", async (req,res) => {
    const { year } = req.params;  
    const { semester } = req.params;  


    try {
        connection.query("SELECT * FROM schedules WHERE year = ? AND semester = ?", [year,semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({ results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

app.get("/readcourse/single/:year", async (req, res) => {
    const { year } = req.params;  
    try {
        connection.query("SELECT * FROM courses WHERE year = ?", [year], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({ results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

app.delete("/deleteschedule/single/:id", async (req, res) => {
    const { id } = req.params;  
    try {
        connection.query(`DELETE FROM schedules WHERE id = ?`, id, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({ results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});

app.patch("/updateschedule", async (req,res) => {
    const { 
        id,
        subject_edit ,
        num_students_edit , 
        sec_edit , 
        room_edit ,
        day_edit , 
        start_time_edit , 
        end_time_edit , 
        } = req.body;
    try {
        connection.query("UPDATE schedules SET subject = ?, num_students = ?, sec = ? , room = ?, day = ?, start_time = ?, end_time = ? WHERE id = ?",
        [ subject_edit ,
          num_students_edit , 
          sec_edit , 
          room_edit ,
          day_edit , 
          start_time_edit , 
          end_time_edit ,
          id, ]
        , (err, results,fields) =>{
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            return res.status(200).json({results});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

connection.connect((err) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("mysql connected");
  });
  
  app.post("/create", async (req, res) => {
    const year = req.body.year;
    console.log("Selected year:", year);
    const dataserver = req.body.dataserver;
  
    connection.query(
      "SELECT COUNT(*) AS count FROM courses WHERE year = ?",
      [year],
      (err, results) => {
        if (err) {
          return console.error(err.message);
        }
  
        const { count } = results[0];
  
        if (count > 0) {
          console.error(`ปี ${year} ซ้ำในฐานข้อมูล กรุณาเลือกปีอื่น`);
          return res.status(400).json({
            error: {
              message: `ปี ${year} ซ้ำในฐานข้อมูล กรุณาเลือกปีอื่น`,
            },
          });
        }
  
        if (!Array.isArray(dataserver)) {
          return res.status(400).json({ message: "รูปแบบข้อมูลไม่ถูกต้อง: dataserver ต้องเป็น array" });
        }
  
        const extractedList = [];
        for (const course of dataserver) {
          extractedList.push(course.courseid, course.subject, course.credit, course.unit);
        }
  
        const list = [];
        for (let i = 0; i < extractedList.length; i += 4) {
          list.push([extractedList[i], extractedList[i + 1], extractedList[i + 2], extractedList[i + 3], year]);
        }
  
        // Insert all courses in a single query using `db.query` with multiple values
        connection.query(
          "INSERT INTO courses (courseid, subject, credit, unit, year) VALUES ?",
          [list],
          (err, results, fields) => {
            if (err) {
              return console.error(err.message);
            }
  
            res.status(201).json({ message: "   อัพโหลดไฟล์เสร็จสิ้น   " });
            console.log("User", results.insertId);
            console.log(list[list.length - 1][4]); // Access the last inserted year
          }
        );
      }
    );
  });


app.listen(5000, () => { console.log("Server started on port 5000")})
