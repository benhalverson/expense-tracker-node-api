const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB ${connect.connection.host}`.cyan.underline.bold);
  } catch (error) {
   console.error(`Error ${error.message}`.red);
  }
}

module.exports = connectDB;