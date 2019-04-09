const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;


app.get('/api/items', (req, res) => {
  db.collection('items').find().toArray().then(items => {
    const metadata = { total_count: items.length };
    res.json({ _metadata: metadata, records: items })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.created = new Date();
  if (!newItem.status)
    newItem.status = 'New';

  const err = validateItem(newItem);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('menu');
  app.listen(8080, () => {
    console.log('App started on port 8080');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
