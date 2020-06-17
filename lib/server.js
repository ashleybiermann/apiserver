'use strict';

const express = require('express');
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');
const app = express();

// memory arrays to store things
const categories = [];
const products = [];

// middleware to use at application level
app.use(express.json());
app.use(timeStamp);
app.use(logger);

// routes go here
app.post('/categories', (req, res) => {
  console.log(req.body);
  categories.push(req.body);
  res.send(req.body);
});
app.get('/categories', (req, res) => {
  console.log(categories);
  // console.log('/categories route hit ', req.path, req.method, req.headers, req.body);
  res.send(categories);
});
app.get('/categories/:id', (req, res) => {

  let returnedRecord = '';
  const wantedRecord = req.params.id;
  // console.log('wanted record' + wantedRecord);

  for (let i = 0; i < categories.length; i++) {
    if (parseInt(wantedRecord) === categories[i].id) {
      console.log('wanted record' + wantedRecord);
      console.log(typeof(wantedRecord));
      console.log('categories[i].id' + categories[i].id);
      console.log(typeof(categories[i].id));

     returnedRecord = categories[i];
    } else {
     returnedRecord = 'sad day:( ';
    }
  }
  console.log(returnedRecord);
  res.send(returnedRecord);
});
app.put('/categories/:id', (req, res) => {
  // use the object in the body to replace the record with the id specified
  console.log(req.body);
  res.send(req.body);
});
app.delete('/categories/:id', (req, res) => {
  // delete the record with the id specified
  console.log(req.body);
  res.send(req.body);
});

// ----- products routes------

app.post('/products', (req, res) => {
  // use object in req.body to create new record
    console.log(req.body);
    products.push(req.body);
    res.send(req.body);
});
app.get('/products', (req, res) => {
  console.log('/products route hit ', req.path, req.method, req.headers, req.body);
  res.send({ products });
});
app.get('/products/:id', (req, res) => {
  console.log('/products/:id route hit ', req.path, req.method, req.headers, req.body);
  res.send({ products });
});
app.put('/products/:id', (req, res) => {
  // use the object in the body to replace the record with the id specified
  console.log(req.body);
  res.send(req.body);
});
app.delete('/products/:id', (req, res) => {
  // delete the record with the id specified
  console.log(req.body);
  res.send(req.body);
});

app.use(error404);
app.use(error500);

module.exports = app;

// {
//  start: app.listen,
// };