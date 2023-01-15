const express = require('express');
const Brand = require('../models/brand.module');
const Products = require('../models/product.module');

const router = express.Router();

// get all brands
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find().sort({ brandName: 1 });
    return res.status(200).json(brands);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// get all the product catgories
router.get('/products', async (req, res) => {
  try {
    const products = await Products.find().sort({ title: 1 });
    return res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// router.get('/:id/contact', async (req, res) => {
//   try {
//     const seller = await Seller.find({_id:id})
//     return res.status(200).json(seller)
//   } catch (error) {
//     res.status(404).json({error:error})
//   }
// })

// get a single seller details
router.get('/:id', async (req, res) => {
  try {
    const { id: _id } = req.params;
    const brand = await Brand.findById(_id);
    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
