const mongoose = require('mongoose')

const newOrderModel = new mongoose.Schema({
    customerName: { type: String },
    customerEyeNumber: {
        left: { type: String, required: true },
        right: { type: String, required: true }
    },
    glassType: { type: String },
    framImage: { type: String },
    customerContactNo: { type: String },
    framePrice: { type: String },
    glassPrice: { type: String},
    totalPrice: { type: String },
    status: { type: String }
    
}, { timestamps: true })

module.exports = mongoose.model('newOrder', newOrderModel)