'use strict';

// this router dynamically handle model logic based on paramter attahed to the request

const express = require('express');
const router = express.Router();

// bring in MOdels
const ProductModel = require('../models/products/products-model.js');
const CategoryModel = require('../models/categories/categories-model.js');

//define some paramter middleware
//we can look for a specific param in a route, and modify the request object
// In this way, we can communiate with handlers that are next in the request 'list'

function getModel(req, res, next) {
  // console.log(req);
  let model = req.params.model;
  switch (model) {
    case 'categories':
      req.model = new CategoryModel();
      next();
      break;
    case 'products':
      req.model = new ProductModel();
      next();
      break;
    default:
      next('Invalid Model');
      break;
  }
}

router.param('model', getModel);

router.get('/:model', getAll);
router.get('/:model/:id', getOneById);
router.post('/:model', createOne);
router.put('/:model/:id', updateOneById);
router.delete('/:model/:id', deleteOneById);

//uses attached req.model to pass info through
async function getAll(req, res) {
  console.log('getAll route hit');
  const result = await req.model.get();
  res.send(result);
}

async function getOneById(req, res) {
  const result = await req.model.get(req.params.id);
  res.send(result);
}

async function createOne(req, res) {
  const result = await req.model.create(req.body);
  res.send(result);
}

async function updateOneById(req, res) {
  const result = await req.model.update(req.params.id, req.body);
  res.send(result);
}

async function deleteOneById(req, res) {
  const result = await req.model.delete(req.params.id);
  res.send(result);
}

module.exports = router;