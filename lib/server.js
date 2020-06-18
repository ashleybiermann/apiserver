'use strict';

const express = require('express');
const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');
const app = express();

// middleware to use at application level
app.use(express.json());
app.use(timeStamp);
app.use(logger);

// memory arrays to store things
// const categories = [];
// const products = [];

// index.js '/' route, directs user to the two available routes
app.get('/', (req, res) => {
  res.send('Welcome to my API, use these routes please: <br> /categories <br> /products');
});

// ROUTERS go here
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.use(error404);
app.use(error500);

// module.exports = app;

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is up on : ' + port);
    });
  }
}

// MDN docs on .splice are AMAZING for DELETE and PUT
