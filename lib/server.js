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
const categories = [];
const products = [];

// index.js '/' route, directs user to the two available routes
app.get('/', (req, res) => {
  res.send('Welcome to my API, use these routes please: <br> /categories <br> /products');
});

// ROUTERS go here
app.use 

// routes go here
app.post('/categories', (req, res) => {
  categories.push(req.body);
  res.send(req.body);
});
app.get('/categories', (req, res) => {
  // console.log(categories);
  res.send(categories);
});
app.get('/categories/:id', (req, res) => {
  categories.forEach(category => {
    if (category.id === req.params.id) {
      res.send(category);
    }
  });
});
app.put('/categories/:id', (req, res) => {
  const replacement = req.body;
  categories.forEach((category, index) => {
    if (category.id === req.params.id) {
      const replace = index;
      categories.splice(replace, 1, replacement);
      res.send('Record has been updated');
    }
  });
});
app.delete('/categories/:id', (req, res) => {
  categories.forEach((category, index) => {
    if (category.id === req.params.id) {
      const remove = index;
      categories.splice(remove, 1)
    }
  });
  res.send(`Cateogory with ID  ${req.params.id} has been deleted`);
});

// ----- products routes------

app.post('/products', (req, res) => {
    products.push(req.body);
    res.send(req.body);
});
app.get('/products', (req, res) => {
  res.send({ products });
});
app.get('/products/:id', (req, res) => {
  products.forEach(product => {
    if (product.id === req.params.id) {
      res.send(product);
    }
  });
});
app.put('/products/:id', (req, res) => {
  const replacement = req.body;
  products.forEach((product, index) => {
    if (product.id === req.params.id) {
      const replace = index;
      products.splice(replace, 1, replacement);
      res.send('Record has been updated');
    }
  });
});
app.delete('/products/:id', (req, res) => {
  products.forEach((product, index) => {
    if (product.id === req.params.id) {
      const remove = index;
      products.splice(remove, 1);
    }
  });
});

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
