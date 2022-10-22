const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
  {
    address: {
      city: { type: String },
      state: { type: String },
      pincode: { type: Number },
    },
    brandLogo: { type: String },
    brandName: { type: String, required: true, unique: true },
    brandDesc: { type: String, required: true },
    brandWebsite: { type: String },
    paymentOptions: { type: Array, required: true },
    deliveryTime: { type: String, required: true },
    productCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true }],
    socialMediaHandles: {
      instagram: { type: String },
      facebook: { type: String },
      youtubeChannel: { type: String },
    },
    brandContactNumber: { type: Number, required: true },
    FAQs: { type: Array },

  },
  {
    timestamps: true,
  },
);

const model = new mongoose.model('brand', brandSchema);
module.exports = model;
