const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


// handles stripe charges
router.post('/', async (req, res) => {
  console.log('--------------------------------------------')
  console.log('/charge POST hit', req.body)
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.amount * 100,
      currency: 'usd',
      description: 'testing stripe for coffee',
      source: req.body.data
    });
    console.log('status: ', status)
    res.send({ status });
  } catch (error) {
    console.log('Error creating stripe charge: ', error)
    res.sendStatus(500);
  }
});

module.exports = router;