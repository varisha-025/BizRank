const mongoose = require('mongoose');

const brandOwnershipSchema = new mongoose.Schema(
  {
    brandID: { type: mongoose.Schema.Types.ObjectId, ref: 'brands', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  },
);

const model = new mongoose.model('brandOwnership', brandOwnershipSchema);

module.exports = model;
