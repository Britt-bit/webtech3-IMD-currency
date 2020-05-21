const myUser = require('../../../models/User_data');

const getAllUser = (req, res) => {
    //let uid = result.user._id;
    //console.log(req.user);
    myUser.find({"_id": {"$nin": [req.user._id]}}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "status": "succes",
                "data": docs
            }    
        });
    }) 
}



module.exports.getAllUser = getAllUser;