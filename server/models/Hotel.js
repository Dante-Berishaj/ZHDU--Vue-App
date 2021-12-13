const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    title: String,
    category: String,
    location: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Hotel', hotelSchema);