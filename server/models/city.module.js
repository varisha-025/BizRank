const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
  {
    label: { type: String, required: true },

  },
);

const model = new mongoose.model('city', citySchema);

module.exports = model;
