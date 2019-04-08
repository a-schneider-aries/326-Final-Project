const body_parser = require('body-parser')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bodyParser = require('body-parser');


app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('menu');
  app.listen(8080, () => {
    console.log('App started on port 8080');
});

app.use(express.body_parser)
app.use(express.mongo)
  }).catch(error => {
  console.log('ERROR:', error);
});
