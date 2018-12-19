var fs = require('fs');
var Product = require('./db');

// Connect Mongoose to our local MongoDB via URI specified above and export it below
// DATA FOR PRODUCTS
fs.readFile('data/mockData.json', 'utf-8', function (err,data) {
  if (err) {
    console.log('error reading data');
    console.log(err);
  } else {
    //console.log(JSON.parse(data));
    var data = JSON.parse(data[0]);
    console.log(Product);
    //console.log('prod ', Product);
    data.forEach(d => {
      Product.create({
        price : d.price,
        shippingCost : d.shippingCost,
        details : d.shippingCost,
        quantity : d.quantity,
        fullfilledByAmazon : d.fullfilledByAmazon,
        soldBy : d.soldBy,
        giftWrap : d.giftWrap,
        electronic : d.electronic,
        fourYearProtectionPlan : d.fourYearProtectionPlan,
        twoYearProtectionPlan: d.twoYearProtectionPlan
      })
    });
  }
});
