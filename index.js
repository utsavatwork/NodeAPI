const express = require("express");
const cors = require("cors");
var cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('Authorization','utsav642',{
        httpOnly: true,
        secure: true
    });    
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))