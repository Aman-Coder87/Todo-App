// importing npm packages
const express = require('express');
const chalk = require('chalk');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');
const admin = require("firebase-admin");

// app setting info || PORT 
const app = express();
const PORT = process.env.PORT || 8080 ;

// file path decleration 
const staticPath = path.join( __dirname , '/../public');
const dynimicPath = path.join( __dirname , '/../views');
const serviceAccount = path.join( __dirname , '/../dbInfo.json');

// view engine setup
app.set('view engine', 'hbs');
// using static files
app.use(express.static(staticPath));

// firebase realtime database section
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-app-29ba1.firebaseio.com"
});

// app page routing and rendering
// main page routing
app.get('/' , (req , res) => {
    res.render('index');
});
// 404 error page routing
app.get('*' , (req , res) => {
    res.render('404');
});

// listenning to the app 
app.listen(PORT , (err , data) => {
    if (err) console.log(chalk.blue.bgRed.bold(`ERROR FOUND : ${err}`));
    else console.log(chalk.red.bgBlue.bold('http://127.0.0.1:8080'));
});