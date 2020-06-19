// 'use strict';

// const express = require('express');
// const CategoryModel = require('../models/categories/categories-model.js');
// const Category = new CategoryModel();

// const router = express.Router();

// //we got here because we landed at /categories
// router.get('/', handleGetCategories);
// router.get('/:id', handleGetCategoryById);
// router.post('/', handleCreateCategory);
// router.put('/:id', handleUpdateCategoryById);
// router.delete('/:id', handleDeleteCategoryById);

// async function handleGetCategories(req, res) {
//   const result = await Category.get();
//   res.send(result);
// }

// async function handleGetCategoryById(req, res) {
//   const result = await Category.get(req.params.id);
//   res.send(result);
// }

// async function handleCreateCategory(req, res) {
//   const result = await Category.create(req.body);
//   res.send(result);
// }

// async function handleUpdateCategoryById(req, res) {
//   const result = await Category.update(req.params.id, req.body);
//   res.send(result);
// }

// async function handleDeleteCategoryById(req, res) {
//   const result = await Category.delete(req.params.id);
//   res.send(result);
// }

// module.exports = router;