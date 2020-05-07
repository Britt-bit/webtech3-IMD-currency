const User = require('../models/User_data');
const jwt = require('jsonwebtoken');

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
        }, "MyVerySecretWord")

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
    const user = await User.authenticate()
    (req.body.username, req.body.password).then(result => {
        res.json({
            "status": "succes",
            "data": {
                "user": result
            }
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;