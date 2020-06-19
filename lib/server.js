'use strict';

const express = require('express');
const cors = require('cors'); // Need to figure out what this does
// const productsRouter = require('./routes/products.js');
// const categoriesRouter = require('./routes/categories.js');
const v1 = require('./routes/v1.js');
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404');
const error500 = require('./middleware/500');
const app = express();

// middleware to use at application level
app.use(express.json());
app.use(cors());
app.use(timeStamp);
app.use(logger);

// index.js '/' route, directs user to the two available routes
app.get('/', (req, res) => {
  res.send('Welcome to my API, use these routes please: <br> /categories <br> /products');
});

// ROUTERS go here
//TODO: use v1 now and NOT categories and products alone
// app.use('/categories', categoriesRouter);
// app.use('/products', productsRouter);
app.use('/api', v1);

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
