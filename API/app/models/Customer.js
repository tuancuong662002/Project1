const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: { type: String, maxLength: 255, required: true },
    image: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 255, required: true },
    email: { type: String, maxLength: 255, required: true },
});

module.exports = mongoose.model('Customer', Customer);
