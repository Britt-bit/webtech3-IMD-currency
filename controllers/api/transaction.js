const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "status": "succes",
            "data": {
                "users": []
            }
        }    
    });
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "from": {
                "name": "Britt",
                "id": 1,
                "balance": 100
            },
            "to": {
                "name": "Stijn",
                "id": 2,
                "balance": 75
            },
            "transaction": {
                "id": 1,
                "points": 25
            }
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;