var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.listen(5005);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/opencv', function (req, res) {
    console.log(req.body);
    res.end();
})
