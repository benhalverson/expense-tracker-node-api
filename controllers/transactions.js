const Transaction = require('../models/Transaction');

/**
 * @description Get all transactions 
 * @route GET /api/v1/transactions
 * @access Public 
 */
exports.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Server error`
		});
	}
};

/**
 * @description Add transaction 
 * @route POST /api/v1/transactions
 * @access Public 
 */
exports.addTransaction = async (req, res, next) => {
	try {
		const { text, body } = req.body;
		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction
		});
	} catch (error) {
		if ((error.name = 'ValidationError')) {
			const messages = Object.values(error.errrs).map((value) => value.message);

			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false,
				error: `Error ${error.message}`
			});
		}
	}
};

/**
 * @description Delete transactions 
 * @route Delete /api/v1/transactions/:id
 * @access Public 
 */
exports.deleteTransaction = async (req, res, next) => {
	const { id } = req.params;
	try {
		const transaction = await Transaction.findById(id);
		if (!transaction) {
			return res.status(404).json({
				success: false,
				error: `No transaction found`
			});
		}

		await transaction.remove();
		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: `Error ${error.message}`
		});
	}
};