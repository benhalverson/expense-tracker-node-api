const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);


app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} listening on port ${PORT}`.yellow.bold);
});
