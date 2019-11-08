var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('content-type', 'text/html')
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
    } else {
      next();
    }
});

app.post('/meta', function(req, res) {
    const {  } = req.body
    res.status(200).send({message: "succeeded to create transaction"})
})