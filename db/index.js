//db schema
const mongoose = require('mongoose');
const mongo = 'mongodb://localhost/amazonFEC';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
const db = mongoose.connect(mongo, (err) => {
  if (err) console.log(err)
  else {
    console.log('success connecting');
  }
});

const productSchema = mongoose.Schema({
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

const userSchema = mongoose.Schema({
    location : String,
    loggedIn : Boolean,
    name : String,
    city : String,
    zip : Number
});


const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

var saveAll = () => {
  fs.readFile('data/mockData.json', 'utf-8', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          //console.log(JSON.parse(data));
          var data = JSON.parse(data);
          //console.log(Product);
          //console.log('prod ', Product);
          data.map(d => {
            var entry = new Product(d);
            console.log(entry);
            entry.save()
            .then( (data) => {
              console.log('saved')
            })
            .catch( err => {
              console.log('error saving');
            })
          });
        }
      });
}


module.exports.Product = Product;
// module.exports.User = User;
