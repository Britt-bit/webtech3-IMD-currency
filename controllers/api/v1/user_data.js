const User = require('../../../models/User_data');
const authController = require('../../auth');



const createUser = (req, res, next) => {
    //console.log(req.body);

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


module.exports.createUser = createUser;

//module.exports.transactionSchema = mongoose.model('transaction', transactionSchema);
//module.exports.user = mongoose.model('User', userSchema);