'use strict';

const express = require('express');
// schema goes here, require from file, CategoryModel
// const Category = new CategoryModel

const router = express.Router();

//we got here because we landed at /categories
router.get('/', handleGetCategories);
router.get('/:id', handleGetCategoryById);
router.post('/', handleCreateCategory);
router.put('/:id', handleUpdateCategoryById);
router.delete('/:id', handleDeleteCategoryById);

function handleGetCategories(req, res) {

}

function handleGetCategoryById(req, res) {

}

function handleCreateCategory(req, res) {

}

function handleUpdateCategoryById(req, res) {

}

function handleDeleteCategoryById(req, res) {

}

module.exports = router;