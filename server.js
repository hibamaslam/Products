const express = require('express');
var bodyparser = require('body-parser');
const cors = require('cors');
const api = require('./src/routes/api');
const port = 3000;

// const ProductData = require('./src/models/Productdata');
// const UserData = require('./src/models/UserData');


var app = new express();
app.use(cors());

app.use(bodyparser.json());
app.use('/api', api);

app.get('/',(req,res)=>{
    res.send('Hello from the server');
})

app.listen(port,()=>{
    console.log("port listening at localhost:" + port);
})