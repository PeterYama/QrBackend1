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

const productsSchema = new Schema({
    name: String,
    model: String,
    description: String,
    filename: Number,
    height: Number,
    width: Number,
    price: Number,
    rating: String 
});

const productModel = mongoose.model('productModel', productsSchema);

// export {Schema,productModel}

module.exports = productModel;


