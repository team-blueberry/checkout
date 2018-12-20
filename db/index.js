//db schema
const mongoose = require('mongoose');
const mongo = 'mongodb://localhost/amazonFEC';

const db = mongoose.connect(mongo, (err) => {
  if (err) console.log(err)
  else {
    console.log('success connecting');
  }
});

// PRODUCT SCHEMA
const productSchema = mongoose.Schema({
    productId : Number,
    price : Number,
    shippingCost : Number,
    details : String,
    quantity : Number,
    fullfilledByAmazon : Boolean,
    soldBy : String,
    giftWrap : Boolean,
    electronic : Boolean,
    twoYearProtectionPlan : Number,
    fourYearProtectionPlan : Number
});

// USER SCHEMA
const userSchema = mongoose.Schema({
    userID : Number,
    location : String,
    loggedIn : Boolean,
    name : String,
    city : String,
    zip : Number
});

// MODELS
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

// METHODS

//get all listings from db
var getAllProductListings = () => {
  return Product.find({}).exec();
};
//get a single product based on the url number(id)
var getProduct = (id) => {
  return Product.findOne({"productId" : id}).exec();
}
//get a random user from user
var getRandomUser = () => {
  var rand = Math.floor(Math.random() * 100);
  return User.findOne().skip(rand).exec();
}

var getProductWithUser = (id) => {

//  Promise.all()
}


module.exports.getRandomUser = getRandomUser;
module.exports.Product = Product;
module.exports.User = User;
module.exports.getAllProductListings = getAllProductListings;
module.exports.getProduct = getProduct;
