'use strict';

const express = require('express');
// schema goes here, require from file, ProductModel
// const Product = new ProductModel

const router = express.Router();

router.get('/', handleGetProducts);
router.get('/:id', handleGetProductById);
router.post('/', handleCreateProduct);
router.put('/:id', handleUpdateProductById);
router.delete('/:id', handleDeleteProductById);

function handleGetProducts(req, res) {

}

function handleGetProductById(req, res) {

}

function handleCreateProduct(req, res) {

}

function handleUpdateProductById(req, res) {

}

function handleDeleteProductById(req, res) {

}

module.exports = router;