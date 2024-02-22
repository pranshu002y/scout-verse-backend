const mongoose = require('mongoose');

const Soalschema = mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    Image: {
        type: String,
        required: [true, ''],
        default:
            'https://unsplash.com/photos/woman-in-blue-bralette-holding-sunglasses-putting-on-her-eyes-_KaMTEmJnxY',
    },
    
});

module.exports = mongoose.model('soal', Soalschema);
