const express = require('express');
const City = require('../models/city.module');
const State = require('../models/state.module');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find().sort({ label: 1 });
    return res.status(200).json(cities);
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.get('/states', async (req, res) => {
  try {
    const states = await State.find().sort({ label: 1 });
    return res.status(200).json(states);
  } catch (error) {
    res.status(404).json({ error });
  }
  const headers = new Headers();
  headers.append('X-CSCAPI-KEY', 'API_KEY');

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow',
  };

  fetch('https://api.countrystatecity.in/v1/countries/IN/states/', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
});

// eslint-disable-next-line no-unused-vars
router.get('/imageUpload', async (req, res) => {

});

module.exports = router;
