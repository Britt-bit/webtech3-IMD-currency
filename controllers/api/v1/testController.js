const Transaction = require("../../../models/Transaction");
const User = require("../../../models/User_data");

const getById = (req, res) => {
	Transaction.find({ _id: req.params.id }, (err, docs) => {
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
// const create = (req, res) => {
// 	let transaction = new Transaction();
// 	transaction.fromUser = "1221313";
// 	transaction.toUser = "1231";
// 	transaction.coins = "499";
// 	transaction.reason = "wee";
// 	transaction.message = "bro";
// 	transaction.completed = false;
// 	transaction.save((err, doc) => {
// 		if (!err) {
// 			res.json({
// 				status: "success",
// 				data: {
// 					transaction: doc,
// 				},
// 			});
// 		}
// 	});
// };
const getLeaderboard = (req, res) => {
	User.find({}, (err, docs) => {
		res.json({
			status: "success",
			data: {
				status: "succes",
				data: docs,
			},
		});
	}).sort({ coins: "descending" });
};

const createUser = (req, res) => {
	let user = new User();
	user.name = "jos";
	user.lastname = "ke";
	user.coins = "232";

	user.save((err, doc) => {
		if (err) {
			res.json({
				status: "error",
				message: "could not save this user",
			});
		}
		if (!err) {
			res.json({
				status: "success",
				data: doc,
			});
		}
	});
};
module.exports.createUser = createUser;
module.exports.getLeaderboard = getLeaderboard;
module.exports.getById = getById;
module.exports.getHistory = getHistory;
// module.exports.create = create;
