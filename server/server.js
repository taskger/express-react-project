var express = require('express');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require ('body-parser');
var path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const { request } = require('http');
const saltRounds = 10; // จำนวนรอบในการผสม


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true 
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
                        response.redirect("http://localhost:3000/admin")
                        

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
                    console.log("Email already exists in the database");
                    return res.status(409).json({ message: "Email already exists" });
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
                            setAutoLogout();
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

app.post("/user/addcourse/createlecture", async (req, res) => {
    const { 
         year_lecture,
         semester_lecture ,
         professor_lecture , 
         subject_lecture , 
         num_students_lecture , 
         sec_lecture , 
         day_lecture , 
         start_time_lecture , 
         end_time_lecture ,
         catagory_lecture,
         lecture,
         firstyear_lecture , 
         secondyear_lecture ,
         thirdyear_lecture , 
         fourthyear_lecture,
         otheryear_lecture
         } = req.body;

    try{
        connection.query(
            "INSERT INTO schedules(year, semester , professor , subject, num_students, sec, day, start_time, end_time, catagory ,lecture,firstyear , secondyear ,thirdyear , fourthyear, otheryear) VALUES(?,?,?,?,?,?,?, ?,?,?, ?, ?, ?,?,?,?)",
            [ 
                year_lecture,
                semester_lecture ,
                professor_lecture , 
                subject_lecture , 
                num_students_lecture , 
                sec_lecture , 
                day_lecture , 
                start_time_lecture , 
                end_time_lecture ,
                catagory_lecture,
                lecture,
                firstyear_lecture , 
                secondyear_lecture ,
                thirdyear_lecture , 
                fourthyear_lecture,
                otheryear_lecture
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
         day_practice , 
         start_time_practice , 
         end_time_practice ,
         catagory_practice,
         practice ,
         firstyear_practice , 
         secondyear_practice ,
         thirdyear_practice , 
         fourthyear_practice,
         otheryear_practice
         } = req.body;

    try{
        connection.query(
            "INSERT INTO schedules(year, semester , professor , subject, num_students, sec, day, start_time, end_time, catagory ,practice,firstyear , secondyear ,thirdyear , fourthyear, otheryear) VALUES(?,?,?,?,?,?,?, ?,?, ?, ?, ?, ?,?,?,?)",
            [ 
                year_practice,
                semester_practice ,
                professor_practice , 
                subject_practice , 
                num_students_practice , 
                sec_practice , 
                day_practice , 
                start_time_practice , 
                end_time_practice ,
                catagory_practice,
                practice ,
                firstyear_practice , 
                secondyear_practice ,
                thirdyear_practice , 
                fourthyear_practice,
                otheryear_practice
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
        day_edit , 
        start_time_edit , 
        end_time_edit , 
        } = req.body;
    try {
        connection.query("UPDATE schedules SET subject = ?, num_students = ?, sec = ?, day = ?, start_time = ?, end_time = ? WHERE id = ?",
        [ subject_edit ,
          num_students_edit , 
          sec_edit , 
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

app.listen(5000, () => { console.log("Server started on port 5000")})
