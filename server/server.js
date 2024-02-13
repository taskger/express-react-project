const express = require('express')
const mysql = require('mysql');
const app = express()

app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'se',
})

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
app.listen(5000, () => { console.log("Server started on port 5000")})