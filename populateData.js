var fs = require('fs');
var Product = require('./db').Product;
var User = require ('./db').User;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
// DATA FOR PRODUCTS
const populate = () => {
    fs.readFile('data/mockData.json', 'utf-8', function(err, data) {
          if (err) {
            console.log(err);
          } else {
            var data = JSON.parse(data);
            var id = 1;
            data.map(d => {
              d.productId = id++;
              var entry = new Product(d);
              //console.log(entry);
              entry.save()
              .then( (data) => {
              })
              .catch( err => {
                console.log('error saving');
              });
            });
          }
        });

        fs.readFile('data/mockDataUser.json', 'utf-8', function(err, data) {
              if (err) {
                console.log(err);
              } else {
                //console.log(JSON.parse(data));
                var data = JSON.parse(data);
                //console.log(Product);
                //console.log('prod ', Product);
                data.map(d => {
                  var entry = new User(d);
                  entry.save()
                  .then( (data) => {
                    //console.log('saved')
                  })
                  .catch( err => {
                    console.log('error saving');
                  })
                 });
              }
            });
    }

populate();

module.exports.populate = populate;
