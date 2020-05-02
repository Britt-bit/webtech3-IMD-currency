const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    fromUser: String, 
    //toUser: {id, name, lastname, ...},
    //points: idk,
    date: {type: Date, default: Date.now},
    completed: Boolean
});
const Transaction = mongoose.model('Transaction', transactionSchema);

const getAll = (req, res) => {
    Transaction.find({"fromUser": "Britt"}, (err, docs) => {
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
    transaction.fromUser = "Britt";
    transaction.date = '2002-12-09';
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