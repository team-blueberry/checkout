//db schema
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '',
  host: process.env.HOST || 'localhost', //could be ip address for hosting
  database: process.env.DATABASE || 'checkout',
  port: process.env.PORT || 5432
});

//console.log('env. = ', process.env);
 
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

// METHODS

//get a single product based on the url number(id)
// var getProduct = (id) => {
//     pool.query(`SELECT * FROM products WHERE productId = ${id}`)
//     .then (res => console.log(res.rows[0])
//     .catch(e => console.error(e.stack))
//   }


//get a random user from user
// var getRandomUser = () => {
//   var id = Math.floor(Math.random() * 10000000);
//   return pool.query(`SELECT * FROM users WHERE userId = ${id}`, (err, res) => {
//     console.log(err,res)
//     //pool.end()
// });
// }

// module.exports.getRandomUser = getRandomUser;
// module.exports.getProduct = getProduct;
