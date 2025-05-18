// src/models/Product.model.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: String,
    price: {
        type: Number,
        required: true,
    },
    inStock: Boolean
}, { timestamps: true });

export default function createProductModel(connection) {
    return connection.model('Product', ProductSchema);
}
