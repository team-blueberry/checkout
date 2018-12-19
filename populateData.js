var fs = require('fs');
var Product = require('./db').Product;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
// DATA FOR PRODUCTS
console.log(Product);
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


        // Product.findOneAndUpdate({}{
        //   price : d.price,
        //   shippingCost : d.shippingCost,
        //   details : d.shippingCost,
        //   quantity : d.quantity,
        //   fullfilledByAmazon : d.fullfilledByAmazon,
        //   soldBy : d.soldBy,
        //   giftWrap : d.giftWrap,
        //   electronic : d.electronic,
        //   fourYearProtectionPlan : d.fourYearProtectionPlan,
        //   twoYearProtectionPlan: d.twoYearProtectionPlan
        // })
