const mongoose = require('mongoose');
const productModel = require('./productModel');

const uploadSchema = mongoose.Schema({
  image_url: [{
    type: String
  }],
  
  author: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("upload", uploadSchema);
