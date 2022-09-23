const express = require("express");
const cors = require("cors");
var cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: 'http://localhost:9000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.use(cors(corsOptions));
// app.use(cookieParser());

app.get('/', (req, res) => {
    // res.cookie('Authorization','utsav642',{
    //     httpOnly: true,
    //     sameSite: 'none'
    // });    
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))