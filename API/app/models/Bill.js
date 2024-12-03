const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer", 
        required: true
    },
    items: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", 
                required: true
            },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    total_price: { type: Number, required: true },
    status: {
        type: String,
        enum: ["completed", "processing", "delivered"],
        default: "processing"
    }
}, { timestamps: true });

module.exports = mongoose.model('Bill', Bill);
