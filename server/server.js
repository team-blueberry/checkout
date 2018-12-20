const express = require('express');
const app = express();
const getAllProductListings = require('../db').getAllProductListings;
const getProduct = require('../db').getProduct;

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist/'));

app.get('/', (req,res) => {
    //res.send('here');

});

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

//get single listing based on id number
app.get('/listing/:number', (req,res) => {
  var productId = req.params.number;
  getProduct(productId)
  .then(data => {
    console.log('success get single product');
    res.send(data);
  }).catch(err => {
    console.log('error with getting single product');
    console.log(err);
  })
})

app.listen(3016, () => {
  console.log('listening to port 3016');
});

module.exports = app;
