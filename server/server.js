const express = require('express');
const app = express();
const getAllProductListings = require('../db').getAllProductListings;
const getProduct = require('../db').getProduct;
const getRandomUser = require('../db').getRandomUser;
const bodyParser = require('body-parser');
const compression = require('compression');

app.use(express.static(__dirname + '../react-client/dist/'));
app.use(bodyParser.json());

//app.use(compression());

// app.get('/', (req,res) => {
//
// });

//get all product listings
app.get('/listing', (req,res) => {
  getAllProductListings()
  .then(data => {
    console.log('success getting data from db');
    res.send(data); //array of product data
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('error with getting porduct listing from db');
    console.log(err);
  })
});

//get single listing based on id number and random user
app.get('/listing/:number', (req,res) => {
  let { number } = req.params
  if (number > 100 || number <= 0) {
    res.redirect('/');
    return;
  }
  Promise.all([getRandomUser(),getProduct(number)]) // returns [user,product];
  .then(values => {
    console.log('success getting data from db');
    res.send(values);
    // send values to state
  })
  .catch( err => {
    res.sendStatus(500);
  })
})

// app.get('/*', (req,res) => {
//   res.redirect('https://newyork.craigslist.org/');
// })

app.listen(3016, () => {
  console.log('listening to port 3016');
});

module.exports = app;
