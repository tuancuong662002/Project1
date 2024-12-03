const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
     name: { type: String, maxLength: 255, required: true },
     price: { type: Number, required: true, min: 0 },
     image: { type: String, maxLength: 255 },
     quantity: { type: Number, min: 0 },
});

module.exports = mongoose.model('Product', Product);
