const mongoose = require('mongoose')

const signupModel = new mongoose.Schema({
    user_name: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
    device_id: { type: String }
    
}, { timestamps: true })

module.exports = mongoose.model('user', signupModel)