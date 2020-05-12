const User = require('../../../models/User_data');
const authController = require('../../auth');

const getAllUser = (req, res) => {
    //let uid = result.user._id;
    User.find({"_id": {"$nin": ["5eb51fd1ad1270d1e32537b4"]}}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "status": "succes",
                "data": docs
            }    
        });
    }) 
}

const createUser = (req, res, next) => {
    console.log(req.body);

    let user = new User();
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    //user.password = 
    user.coins = req.body.coins;

    user.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not save this user"
            });
        }
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
//module.exports.user = mongoose.model('User', userSchema);