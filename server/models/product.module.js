const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
);

const model = new mongoose.model('product', productSchema);

module.exports = model;
