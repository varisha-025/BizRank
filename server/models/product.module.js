const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    // category: {type: String}
  },
);

const model = new mongoose.model('product', productSchema);

module.exports = model;
