let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Customer Model
let customerSchema = require('../models/Customer');

// CREATE Customer
router.route('/create-customer').post((req, res, next) => {
  customerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Customers
router.route('/').get((req, res) => {
  customerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Customer
router.route('/edit-customer/:id').get((req, res) => {
  customerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Customer
router.route('/update-customer/:id').put((req, res, next) => {
  customerSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Customer updated successfully !')
    }
  })
})

// Delete Customer
router.route('/delete-customer/:id').delete((req, res, next) => {
  customerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;