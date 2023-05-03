const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean,
        requied: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    }
});

// Connects launches schema with the launches collection (Mongoose lower cases and pluralizes the name)
module.exports = mongoose.model('Launch', launchesSchema);