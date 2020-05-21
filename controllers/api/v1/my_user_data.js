const myUser = require("../../../models/User_data");
const Transaction = require("../../../models/Transaction");

const getMyUser = (req, res) => {
	//let uid = result.user._id;
	//console.log(req.user);
	myUser.find({ _id: { $nin: [req.user._id] } }, (err, docs) => {
		res.json({
			status: "success",
			data: {
				status: "succes",
				data: docs,
			},
		});
	});
};

const getHistory = (req, res) => {
	Transaction.find(
		{
			$or: [{ fromUser: req.params.id }, { toUser: req.params.id }],
		},
		(err, docs) => {
			console.log(req);
			if (!err) {
				res.json({
					status: "success",
					data: {
						data: docs,
					},
				});
			}
			if (err) {
				res.json({
					status: "error",
					data: "Could not find a message with id: " + req.params.id,
				});
			}
		}
	);
};

module.exports.getHistory = getHistory;
module.exports.getMyUser = getMyUser;
