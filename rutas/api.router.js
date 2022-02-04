
var AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

  const ENDPOINT = 'c49ab8hu8d.execute-api.us-west-2.amazonaws.com/desarrollo/';
  const client = new AWS.ApiGatewayManagementApi({ endpoint: ENDPOINT });
  // console.log(client);
  // console.log(req);
  handler();
  res.status(200).json({ estado: true, token: 'token' });



});

const handler = async (event, context) => {

  console.log(event);
  if (!event.requestContext) {
    return {};
  }
  try {
    const connectionId = event.requestContext.connectionId;
    const routeKey = event.requestContext.routeKey;
    const body = JSON.parse(event.body || '{}');

  } catch (err) {
    console.error(err);
  }

  return {};
};

module.exports = app;
