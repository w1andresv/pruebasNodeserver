
var AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const ENDPOINT = 'c49ab8hu8d.execute-api.us-west-2.amazonaws.com/desarrollo/';
const client = new AWS.ApiGatewayManagementApi({ endpoint: ENDPOINT });
app.get('/', (req, res) => {

  const ENDPOINT = 'c49ab8hu8d.execute-api.us-west-2.amazonaws.com/desarrollo/';
  const client = new AWS.ApiGatewayManagementApi({ endpoint: ENDPOINT });
  console.log(client);
  // console.log(req);
  res.status(200).json({ estado: true, token: 'token' });



});
app.get('/connection', (req, res) => {
  console.log('---------CONECTADO-----------');
  console.log(req.body);
  // console.log(req);
  // res.status(200).json({ estado: true, token: 'token' });

  return res.status(200).json({ estado: true });
});
app.post('/setUser', (req, res) => {
  console.log('---------SET USER-----------');
  console.log(req.body);
  // console.log(req);
  // res.status(200).json({ estado: true, token: 'token' });
  return res.status(200).json({ estado: true, action: 'setUser' });

});


module.exports = app;
