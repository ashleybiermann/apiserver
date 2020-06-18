'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String },
  description: { type: String }
})

module.exports = mongoose.model('category', schema);
