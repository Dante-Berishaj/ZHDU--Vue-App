const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    title: String,
    location: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('City', citySchema);