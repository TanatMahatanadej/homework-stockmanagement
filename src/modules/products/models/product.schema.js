const mongoose = require('mongoose')

const Schema = mongoose.Schema


const productSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Qty: {
        type: Number,
        required: true
    }
}, { _id: true, timestamps: true, strict: true })

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel