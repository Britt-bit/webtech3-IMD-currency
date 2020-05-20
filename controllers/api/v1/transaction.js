const Transaction = require('../../../models/Transaction');
//const User = require('./user_data');
//const User = mongoose.model('User', userSchema);

const getAll = (req, res) => {
    Transaction.find({"fromUser": req.user._id}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "status": "succes",
                "data": docs
            }    
        });
    })  
}

const create = async (req, res) => {
    //console.log(req.body.coins);
    //console.log(req.body);
    let fromUser = req.user._id;
    //console.log(req.user);
    let toUser = req.body.toUser;
    let coins = req.body.coins;
    let reason = req.body.reason;
    let message = req.body.message;
    let ownCoins = req.user.coins;
    //transaction.fromUser = new mongoose.Types.ObjectId;



    const transaction = new Transaction({
        fromUser: fromUser,
        toUser: toUser,
        coins: coins,
        reason: reason,
        message: message,
        completed: false
    });
    //console.log(req.user.coins);
    //console.log(req.body.coins);
    

    Transaction.find({ ownCoins: {$gte: coins}},
    
    transaction.save((err, doc) => {
    //.then(result => {
        if(!err){
        res.json({
            "status": "success",
            "data": doc,
            "user": req.user
        })
    }
    if(err){
        res.json({
            "status": "error",
            "message": "something went wrong"
        })
    }
    }))

};




module.exports.getAll = getAll;
module.exports.create = create;


//module.exports.transactionSchema = mongoose.model('transaction', transactionSchema);
//odule.exports.user = mongoose.model('user', userSchema);