const User = require('../models/User_data');
const jwt = require('jsonwebtoken');
const config = require('config');

const signup = async (req, res, next) => {
    console.log(req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({
        firstname: firstname,
        lastname: lastname,
        username: username,
        coins: 100
    });
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            username: result.username
            //coins: result.coins
        }, config.get('jwt.secret'));

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    });
};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "Login failed"
            })
        }
        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
            //coins: result.coins
        }, config.get('jwt.secret'));
        console.log(token);

        return res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        console.log('why?');
        res.json({
            "status": "error",
            "message": error
        })
    });
}

const update = async (req, res) => {
    let toUser = req.body.toUserID;
    let fromUser = req.body.fromUser;
    let transaction = req.body.transactionCoins;

    //console.log(req.user.coins);
    //console.log(transaction);
    User.findByIdAndUpdate({
        _id: toUser
    }, {
        "$inc": { coins: +transaction} 
    }, {new: true 
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                user: doc
            }
        })
    }).catch(err => {
        //res.json(err);
    })

    User.findByIdAndUpdate({
        _id: fromUser
    }, {
        "$inc": { coins: -transaction} 
    }, {new: true 
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                user: doc
            }
        })
    }).catch(err => {
        //res.json(err);
    })
}

module.exports.signup = signup;
module.exports.login = login; 
module.exports.update = update;