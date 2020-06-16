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
app.post('/categories', (req, res, next) => {
  // use object in req.body to create new record
  console.log(req.body);
  res.send(req.body);
});
app.get('/categories', (req, res) => {
  console.log('/categories route hit ', req.path, req.method, req.headers, req.body);
  res.send({ categories });
});
app.get('/categories/:id', (req, res) => {
  console.log('/categories/:id route hit ', req.path, req.method, req.headers, req.body);
  res.send({ categories });
});
app.put('/categories/:id', (req, res) => {
  // use the object in the body to replace the record with the id specified

});
app.delete('/categories/:id', (req, res) => {
  // delete the record with the id specified
});

// ----- products routes------

app.post('/products', (req, res, next) => {
  // use object in req.body to create new record
    console.log(req.body);
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
});
app.delete('/products/:id', (req, res) => {
  // delete the record with the id specified
});

app.use(error404);
app.use(error500);

module.exports = app;