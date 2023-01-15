const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const options = {
  resource_type: 'image',
  file: 'path/to/image.jpg',
};

cloudinary.uploader.upload(options, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result.info.secure_url);
  }
});

module.exports = { cloudinary };
