//db schema
const mongoose = require('mongoose');
const mongo = 'mongodb://localhost/amazonFEC';
const {mlabUsername, mlabPassword} = require('../config.js');

console.log(process.env);
if (process.env.MLABURL) {
  mongoose.connect(process.env.MLABURL, err => {
    if (err) console.log(err);
  });
}
//const mlab = `mongodb://${mlabUsername}:${mlabPassword}@ds111638.mlab.com:11638/amazon-fec`;

// const db = mongoose.connect(mlab, (err) => {
//   if (err) console.log(err)
//   else {
//     console.log('success connecting');
//   }
// });

// PRODUCT SCHEMA
const productSchema = mongoose.Schema({
    productId : {type : Number, unique : true},
    price : Number,
    shippingCost : Number,
    details : String,
    quantity : Number,
    fullfilledByAmazon : Boolean,
    soldBy : String,
    sale : Boolean,
    electronic : Boolean,
    twoYearProtectionPlan : Number,
    fourYearProtectionPlan : Number,
    salePercent : Number
});

// USER SCHEMA
const userSchema = mongoose.Schema({
    location : String,
    loggedIn : Boolean,
    name : String,
    city : String,
    zip : Number
});

// MODELS
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

//if exists, drop
//Product.collection.drop();
//User.collection.drop();

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



module.exports.getRandomUser = getRandomUser;
module.exports.Product = Product;
module.exports.User = User;
module.exports.getAllProductListings = getAllProductListings;
module.exports.getProduct = getProduct;
