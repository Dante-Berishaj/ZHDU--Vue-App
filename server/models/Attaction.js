const mongoose = require('mongoose');

const attractionSchema = mongoose.Schema({
    title: String,
    category: String,
    location: String,
    content: String,
    image: String,
    star: Number,
    web: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Attraction', attractionSchema);