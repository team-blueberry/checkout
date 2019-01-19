const express = require('express');
const app = express();
const getAllProductListings = require('../db').getAllProductListings;
const getProduct = require('../db').getProduct;
const getRandomUser = require('../db').getRandomUser;
const bodyParser = require('body-parser');
const compression = require('compression');
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '',
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'checkout',
  port: process.env.PORT || 5432
});

app.use(compression());
app.use(express.static(__dirname + '/../react-client/dist/'));
app.use(bodyParser.json());


app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept"
 );
 next();
});
  //
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
    console.log('error with getting product listing from db');
    console.log(err);
  })
});

//get single listing based on id number and random user
app.get('/listing/:number', (req,res) => {
  let { number } = req.params
  if (number >= 10000000 || number < 0) {
    res.redirect('/');
    return;
  }
  var id = Math.floor(Math.random() * 10000000);

  var user = pool.query(`SELECT * FROM products WHERE productId = ${id}`)
    .then (res => res.rows[0])
    .catch(e => console.error(e.stack))

  var product = pool.query(`SELECT * FROM users WHERE userId = ${number}`)
    .then (res => res.rows[0])
    .catch(e => console.error(e.stack))
  

  Promise.all([product,user]) // returns [user,product];
  .then(values => {
    console.log('success getting data from db');
    res.send(values);
    // send values to state
  })
  .catch( err => {
    res.sendStatus(500);
  })
})


  


app.listen(3016, () => {
  console.log('listening to port 3016');
});

module.exports = app;
