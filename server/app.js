var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');

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
    let { txdata, from, to, msg, signature } = req.body
    console.log('access to meta route', txdata, from, to, msg, signature)
    web3.eth.sendTransaction({
      from: from,
      to: to,
      data: txdata
    }).then(function(receipt){
      console.log(receipt)
    })
    res.status(200).send({message: "succeeded to create transaction"})
})

module.exports = app;