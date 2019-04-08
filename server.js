const body_parser = require('body-parser')
const mongo = require('mongodb')
const express = require('express');

const app = express();

app.use(express.static('static'));

app.listen(8080, function () {
    console.log('App started on port 8080');
});

app.use(express.body_parser)
app.use(express.mongo)