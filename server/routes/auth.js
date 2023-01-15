const bcrypt = require('bcryptjs');
const express = require('express');
// const Joi = require("joi");
const jwt = require('jsonwebtoken');
// const sendEmail = require("../utils/sendEmail");
// const Token = require("../models/token.module");
const User = require('../models/user.module');
const Brand = require('../models/brand.module');

const router = express.Router();

router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.status(200).json({ status: 'ok', user });
  } catch (err) {
    res.status(404).json({ status: 'error', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid login' });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password,
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'secret123',
    );

    return res.json({ status: 'ok', user: token });
  }
  return res.json({ status: 'error', user: false });
});

router.post('/brandRegister', async (req, res) => {
  console.log(req.body);

  const socialMediavalue = {
    instagram: req.body.socialMediaHandles.instagram,
    facebook: req.body.socialMediaHandles.facebook,
    youtubeChannel: req.body.socialMediaHandles.youtubeChannel,
  };
  const addressValue = {
    city: req.body.address.city,
    pincode: req.body.address.pincode,
    state: req.body.address.state,
  };
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const newBrand = await new Brand({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
      dob: req.body.dob,
      phoneNumber: req.body.phoneNumber,
      address: addressValue,
      gender: req.body.gender,
      brandLogo: req.body.brandLogo,
      brandName: req.body.brandName,
      brandDesc: req.body.brandDesc,
      brandWebsite: req.body.brandWebsite,
      paymentOptions: req.body.paymentOptions,
      deliveryTime: req.body.deliveryTime,
      productCategories: req.body.productCategories,
      brandContactNumber: req.body.brandContactNumber,
      brandContactEmail: req.body.brandContactEmail,
      socialMediaHandles: socialMediavalue,
    });
    res.status(200).json({ status: 'ok', seller: newBrand });
  } catch (err) {
    res.status(404).json({ status: 'error', error: err.message });
  }
});

// router.post('/sellerLogin', async (req, res) => {
//   const seller = await Brand.findOne({
//     email: req.body.email,
//   });

//   if (!seller) {
//     return res.json({ status: 'error', error: 'Invalid login' });
//   }

//   const isPasswordValid = await bcrypt.compare(
//     req.body.password,
//     seller.password,
//   );

//   if (isPasswordValid) {
//     const token = jwt.sign(
//       {
//         name: seller.name,
//         email: seller.email,
//       },
//       'secret123',
//     );

//     return res.json({ status: 'ok', seller: token });
//   }
//   return res.json({ status: 'error', seller: false });
// });

module.exports = router;
