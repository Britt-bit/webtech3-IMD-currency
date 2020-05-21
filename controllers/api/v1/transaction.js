const Transaction = require("../../../models/Transaction");
//const User = require('./user_data');
//const User = mongoose.model('User', userSchema);

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
		completed: false,
	});
	//console.log(req.user.coins);
	//console.log(req.body.coins);

	Transaction.find(
		{ ownCoins: { $gte: coins } },

		transaction.save((err, doc) => {
			//.then(result => {
			if (!err) {
				res.json({
					status: "success",
					data: doc,
					user: req.user,
				});
			}
			if (err) {
				res.json({
					status: "error",
					message: "something went wrong",
				});
			}
		})
	);
};
// const getAll = (req, res) => {
// 	Transaction.find({}, (err, docs) => {
// 		res.json({
// 			status: "success",
// 			data: {
// 				status: "succes",
// 				data: docs,
// 			},
// 		});
// 	});
// };
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

// module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.getLeaderboard = getLeaderboard;

//module.exports.transactionSchema = mongoose.model('transaction', transactionSchema);
//odule.exports.user = mongoose.model('user', userSchema);
