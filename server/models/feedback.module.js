const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number },
    comments: { type: Array },
    productPhotos: { type: Image },
    // productVideos: {type: video},
    suggestions: { type: String },
  },
  {
    timestamps: true,
  },
);

const model = new mongoose.model('feedback', feedbackSchema);

module.exports = model;
