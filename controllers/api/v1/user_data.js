const mongoose = require('mongoose');
const UserSchema = mongoose.Schema;
const userSchema = new UserSchema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    //password: String,
    coins: {
        type: Number,
        min: 0
    }
})
const User = mongoose.model('User', userSchema);

const getAllUser = (req, res) => {
    User.find({"name": "Stijn"}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "status": "succes",
                "data": docs
            }    
        });
    })  
}

const createUser = (req, res) => {
    let user = new User();
    user.name = "Stijn";
    user.lastname = "Bouckaert";
    user.email = "stijn@gmail.com";
    user.coins = 230;

    user.save((err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": doc
            });
        }
    })
    
}

module.exports.getAllUser = getAllUser;
module.exports.createUser = createUser;

//module.exports.transactionSchema = mongoose.model('transaction', transactionSchema);
module.exports.user = mongoose.model('User', userSchema);