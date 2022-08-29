const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    address: {
      city: { type: String },
      state: { type: String },
      pincode: { type: Number },
    },
    dob: { type: Date },
    gender: { type: String, required: true },
    brandLogo: { type: String },
    brandName: { type: String, required: true },
    brandWebsite: { type: String },
    brandDesc: { type: String, required: true },
    paymentOptions: { type: Array },
    deliveryTime: { type: String },
    productCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
    socialMediaHandles: {
      instagram: { type: String },
      facebook: { type: String },
      youtubeChannel: { type: String },
    },
    brandContactNumber: { type: Number },
    brandContactEmail: { type: String },

  },
  {
    timestamps: true,
  },
);

const model = new mongoose.model('seller', sellerSchema);
module.exports = model;
