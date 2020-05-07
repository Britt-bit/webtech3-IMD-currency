const mongoose = require('mongoose');
//const user = require('./user_data');
//console.log(userSchema.name);
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    //transaction_id: ObjectId,
    //user: [{id: ObjectId, name: String, lastname: String, email: String, password: String, coins: Number}],
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    toUser: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    coins: {
        type: Number,
        required: true
    },
    date: {type: Date, default: Date.now},
    reason: String,
    message: String,
    completed: Boolean
});
const Transaction = mongoose.model('Transaction', transactionSchema);
//const User = mongoose.model('User', userSchema);

const getAll = (req, res) => {
    Transaction.find({"completed": 0}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "status": "succes",
                "data": docs
            }    
        });
    })  
}

const create = (req, res) => {
    let transaction = new Transaction();
    transaction.fromUser = new mongoose.Types.ObjectId;;
    transaction.toUser = new mongoose.Types.ObjectId;;
    transaction.coins = 20;

    transaction.reason = "Help with developing";
    transaction.message = "Thank you";
    transaction.completed = false;

    user.save((err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": doc
            });
        }
    })
    transaction.save((err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": doc
            });
        }
    })

    
}

module.exports.getAll = getAll;
module.exports.create = create;

module.exports.transactionSchema = mongoose.model('transaction', transactionSchema);
//odule.exports.user = mongoose.model('user', userSchema);