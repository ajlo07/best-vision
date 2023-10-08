const mongoose = require('mongoose')

const signupModel = new mongoose.Schema({
    user_name: { type: String },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String,unique: true },
    device_id: { type: String,unique: true }
    
}, { timestamps: true })

module.exports = mongoose.model('user', signupModel)