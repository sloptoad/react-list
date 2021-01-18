const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  id: {
    type: String
  },
  address: {
    type: String
  },
  birthday: {
    type: Date
  }
}, {
  collection: 'customer'
})

module.exports = mongoose.model('Customer', customerSchema)