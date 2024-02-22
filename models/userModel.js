const mongoose = require('mongoose');
const productModel = require('./productModel');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    profileLink: {
        type: String,
        required: [true, ''],
        default:
            'https://unsplash.com/photos/woman-in-blue-bralette-holding-sunglasses-putting-on-her-eyes-_KaMTEmJnxY',
    },
    
});

module.exports = mongoose.model('user', UserSchema);
