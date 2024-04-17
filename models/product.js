const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    dailyIncome: {
        type: Number,
        require: true
    },
    validityPeriod: {
        type: String,
        require: true
    },
    totalIncome: {
        type: String,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Product', productSchema)