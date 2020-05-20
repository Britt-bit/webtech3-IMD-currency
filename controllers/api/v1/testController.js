const Transaction = require("../../../models/Transaction");

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
const create = (req, res) => {
	let transaction = new Transaction();
	transaction.fromUser = "1221313";
	transaction.toUser = "1231";
	transaction.coins = "1";
	transaction.reason = "wee";
	transaction.message = "bro";
	transaction.completed = false;
	transaction.save((err, doc) => {
		if (!err) {
			res.json({
				status: "success",
				data: {
					transaction: doc,
				},
			});
		}
	});
};
module.exports.getById = getById;
module.exports.create = create;
