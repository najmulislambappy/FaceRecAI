var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.listen(5005)
console.log(`Web Server Started on: ${5005}`);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{res.send('Listening for POST request on: 5005')});

app.post('/opencv', function (req, res) {
    console.log(req.body);
    res.end();
})

/*
Very quick and dirty way I know. I will be changed later on!
*/