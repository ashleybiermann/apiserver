'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// debugging tool
const db = mongoose.connection;
db.on('open', () => {
    console.log('connected to mongo');
  });

server.start(PORT);


/* 
This code used to over-ride the route.render in order to provide a count and results.

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()

router.render = (req, res) => {
  res.jsonp({
    count: res.locals.data.length,
    results: res.locals.data,
  });
}

server.use(middlewares)
// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
*/ 
