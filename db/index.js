//db schema
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/amazonFEC';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri);

var productSchema = mongoose.Schema({
    price : Number,
    shippingCost : Number,
    details : String,
    quantity : Number,
    fulfilledByAmazon : Boolean,
    soldBy : String,
    giftWrap : Boolean,
    depeartment : String,
    protectionPlanCost : { twoYear : Number, fourYear : Number }
});

var userSchema = mongoose.Schema({
    location : String,
    loggedIn : Boolean,
    name : String,
    city : String,
    zip : Number
});

module.exports = db;
