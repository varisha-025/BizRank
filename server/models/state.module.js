const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },

  },
);

const model = new mongoose.model('state', stateSchema);

module.exports = model;
