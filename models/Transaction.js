  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Transaction = new Schema({
    fromUser: {type: String, required: true},
    toUser: {type: String, required: true},
    coins: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    reason: {type: String, required: true},
    message: {type: String},
    completed: {type: Boolean}
})

module.exports = mongoose.model('Transaction', Transaction);