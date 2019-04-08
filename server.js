const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
 db = connection.db('menu');
 app.listen(8080, () => {
   console.log('App started on port 8080');
 });
}).catch(error => {
 console.log('ERROR:', error);
});
