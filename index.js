const express = require("express");
const cors = require("cors");
var cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:9000/login.html');

    res.cookie('Authorization','utsav642',{
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });    
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))