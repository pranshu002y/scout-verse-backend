const mongoose = require('mongoose');
const userModel = require('./userModel');

const ProductSchema =new mongoose.Schema({
    Product:{
        type: String,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    Price:{
        type: String,
        required: true,
    },
    Brand:{
        type: String,
        required: true,
    }
    ,
    // image_url: [{
    //     type: String
    //   }],
    //   author: {
    //     type: String,
    //     required: true,
    //   },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
})

module.exports = mongoose.model("product", ProductSchema);


