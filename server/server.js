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
    password: 'root',
    database: 'register',
    port: '8889'
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




connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Mysql database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

app.post("/user/addcourse/create", async (req, res) => {
    const { subject , num_students , sec , day , start_time , end_time ,catagory } = req.body;

    try{
        connection.query(
            "INSERT INTO schedules(subject, num_students, sec, day, start_time, end_time, catagory) VALUES(?, ?, ?, ?, ?, ?, ?)",
            [subject , num_students , sec , day , start_time , end_time ,catagory],
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
app.get("/readcourse/single/:catagory", async (req,res) => {
    const catagory = req.params.catagory;
    try {
        connection.query("SELECT * FROM schedules WHERE catagory = ?", [catagory] ,(err, results,fields) =>{
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

app.listen(8000, () => { 
    console.log("Server started on port 5000");
});
