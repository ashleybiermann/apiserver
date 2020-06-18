'use strict';

const express = require('express');
const ProductModel = require('../models/products/products-model.js');
const Product = new ProductModel();

const router = express.Router();

router.get('/', handleGetProducts);
router.get('/:id', handleGetProductById);
router.post('/', handleCreateProduct);
router.put('/:id', handleUpdateProductById);
router.delete('/:id', handleDeleteProductById);

async function handleGetProducts(req, res) {
  const result = await Product.get();
  res.send(result);
}

async function handleGetProductById(req, res) {
  const result = await Product.get(req.params.id);
  res.send(result);
}

async function handleCreateProduct(req, res) {
  const result = await Product.create();
  res.send(result);
}

async function handleUpdateProductById(req, res) {
  const result = await Product.update(req.params.id, req.body);
  res.send(result);
}

async function handleDeleteProductById(req, res) {
  const result = await Product.delete(req.params.id);
  res.send(result);
}

module.exports = router;
