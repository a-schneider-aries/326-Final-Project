const body_parser = require('body-parser')
const mongo = require('mongodb').MongoClient
const express = require('express');
const mongodb = require('mongodb');
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
<<<<<<< HEAD
});

app.use(express.body_parser)
app.use(express.mongo)
=======
  });
}).catch(error => {
  console.log('ERROR:', error);
});
>>>>>>> 8331e3e778cf6e5d7c60966a7dc81f3d418a234e
