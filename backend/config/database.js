const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb+srv://eyammouny:eyammouny?@yammouni.m9v5vih.mongodb.net//?retryWrites=true&w=majority', {
      await mongoose.connect('mongodb+srv://eyammouny:eyammouny@etedb.ho0pjon.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    return mongoose;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
