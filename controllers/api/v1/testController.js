const Transaction = require("../../../models/Transaction");

const getById = (req, res) => {
	Transaction.find(
		{
			_id: req.params.id,
		},
		(err, docs) => {
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
module.exports.getById = getById;
