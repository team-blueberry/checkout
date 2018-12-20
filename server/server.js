const express = require('express');
const app = express();
const getAllProductListings = require('../db').getAllProductListings;
const getProduct = require('../db').getProduct;
const getRandomUser = require('../db').getRandomUser;


const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist/'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  
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

//get single listing based on id number and random user
app.get('/listing/:number', (req,res) => {
  var productId = req.params.number;
  Promise.all([getRandomUser(),getProduct(productId)]) // returns [user,product];
  .then(values => {
    res.send(values);
  })
  .catch( err => {
    res.sendStatus(500);
  })
})

app.listen(3016, () => {
  console.log('listening to port 3016');
});

module.exports = app;
