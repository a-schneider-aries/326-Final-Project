const body_parser = require('body-parser')
const express = require('express');

const app = express();


app.use(express.static('static'));
app.use(body_parser.json());

const MongoClient = require('mongodb').MongoClient;

function validateIssue(issue) {
  for (const field in issueFieldType) {
    const type = issueFieldType[field];
    if (!type) {
      delete issue[field];
    } else if (type === 'required' && !issue[field]) {
      return `${field} is required.`;
    }
  }
  if (!validIssueStatus[issue.status])
    return `${issue.status} is not a valid status.`;
  return null;
}


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
  // NEW - remove this, we now have the object ID from mongo!
  // newIssue.id = issues.length + 1;
  newItem.created = new Date();

  const err = validateIssue(newItem);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }
  db.collection('items').insertOne(newItem).then(result =>
    db.collection('items').find({ _id: result.insertedId }).limit(1).next()
  ).then(newItem => {
    res.json(newItem);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});
  

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('menu');
  app.listen(3000, () => {
    console.log('App started on port 3000');
});

app.use(express.body_parser)
app.use(express.mongo)
  }).catch(error => {
  console.log('ERROR:', error);
});
