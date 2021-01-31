const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
app.use(morgan('combined'));

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);


app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} listening on port ${PORT}`.yellow.bold);
});
