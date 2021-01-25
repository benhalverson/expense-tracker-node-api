/**
 * @description Get all transactions 
 * @route GET /api/v1/transactions
 * @access Public 
 */
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

/**
 * @description Add transaction 
 * @route POST /api/v1/transactions
 * @access Public 
 */
exports.addTransaction = (req, res, next) => {
  res.send('POST transactions');
}

/**
 * @description Delete transactions 
 * @route Delete /api/v1/transactions/:id
 * @access Public 
 */
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
}

