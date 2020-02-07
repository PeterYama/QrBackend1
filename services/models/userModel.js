const mongoose = require('mongoose');
require('dotenv').config()
const userPass = process.env.MONGODBPASS

mongoose.connect('mongodb+srv://user:'+userPass+'@cluster0-cv9no.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', function() {
  console.log("connected");
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    secondPassword: String,
});

const userModels = mongoose.model('user Schema', userSchema);

module.exports = userModels;

