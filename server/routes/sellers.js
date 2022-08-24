const express = require('express')
const Seller = require('../models/seller.module')
const Products = require('../models/product.module')

router = express.Router()

// get all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.find()
    return res.status(200).json(sellers)
  } catch (error) {
    res.status(404).json({error:error})
  }
})

//get all the product catgories
router.get('/products', async (req, res) => {
  try {
    const products = await Products.find().sort({"title": 1})
    return res.status(200).json(products)
  } catch (error) {
    res.status(404).json({error:error})
  }
})

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
    const seller = await Seller.findById(_id);
    res.status(200).json(seller);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
})

module.exports = router