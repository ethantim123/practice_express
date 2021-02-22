/**
 * What is Express?
 * -It's a module.
 * -It's a framework for Node.js applications
 * -It's helps us writ Node.js faster.
 */

//  以下三行搭配try.js,說明所存取變數不只可作為一個物件,也可代表一個function
//  const myTryCode = require("./try");
//  console.log(myTryCode);
//  console.log(typeof myTryCode);

// (比較)Node.js http module

const express = require("express");
const app = express(); //使用express變數命名為為傳統習慣app
const path = require("path");
const bodyParser = require("body-parser");

// serving a static file
// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

// routning in express 
// request handling, handle different request 
app.get("/", (req, res) => {
    // console.log(req);
    // console.log(res);
    // 送出單行內容
    // res.send("<h1You are on the homepage.</h1>");
    // 送出多行內容
    // res.sendFile(__dirname + "/index.html");
    res.sendFile(path.join(__dirname, "index.html"));

    // API
    // let Wilson = {
    //     name: "Wilson Ren",
    //     age: 25,
    // };
    // res.send(Wilson);
    
});

app.get("/wilson", (req,res) => {
    res.send("This is Wilson's page.");
});

app.get("/mike", (req, res) => {
    // res.send("This is Mike's page.");
    res.status(302);
    res.sendFile(path.join(__dirname, "move.html"));
});

//-------------------------------------------------------------------------------------
// error page
app.get("*", (req, res) => {
    res.status(404);
    // console.log(res.statusCode);
    res.sendFile(path.join(__dirname, "error.html"));
})


//-------------------------------------------------------------------------------------
// routing for query
// POST
// app.post("/formHandling", (req, res) => {
//     // console.log(req.body); //{ fullname: 'peterWang', age: '25' }

//     let {fullname, age} = req.body;
//     res.send(`Thanks for posting. Yuor name is ${fullname}, and your age is ${age}.`);
// });

//GET
// app.get("/formHandling", (req, res) => {
//     console.log(req.query); //http://localhost:3000/formHandling?fullname=Peter+Wang&age=25  => { fullname: 'Peter Wang', age: '25' }
    
//     let { fullname, age } = req.query;
//     res.send("Thanks " + fullname + " for sending data.");
// });


//-------------------------------------------------------------------------------------
// routing for pattern
// app.get("/fruit/:someFruit", (req, res) =>{
//     // console.log(req.params); //http://localhost:3000/fruit/apple => { someFruit: 'apple' }

//     let { someFruit } = req.params; //destructing an object
//     res.send("You are looking for " + req.params.someFruit);
// });

//-------------------------------------------------------------------------------------
// routing for all (須放在最後)
// app.get("*", (req, res) => {
//     res.send("Cannot find what you want.");
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});


