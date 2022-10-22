const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    favBusiness: { type: Array },
    mostShoppedBusiness: { type: Array },
    favProducts: { type: Array },
  },
  {
    timestamps: true,
  },
);

const model = new mongoose.model('User', UserSchema);

module.exports = model;
