const mongoose = require('mongoose');
const User = require('./user_data');
//console.log(userSchema.name);
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    //transaction_id: ObjectId,
    //user: [{id: ObjectId, name: String, lastname: String, email: String, password: String, coins: Number}],
    //fromUser: {type: String,ref: 'User'},
    //toUser: {type: Schema.ObjectId,ref: 'User'},
    coins: {
        type: Number,
        required: true
    },
    date: {type: Date, default: Date.now},
    reason: {
        type: String},
    message: {type: String},
    completed: {type: Boolean}
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
    let message = req.body.message;
    //transaction.fromUser = new mongoose.Types.ObjectId;;
    //transaction.toUser = new mongoose.Types.ObjectId;;
    transaction.coins = 20;

    transaction.reason = "Help with developing";
    transaction.message = message;
    transaction.completed = false;


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