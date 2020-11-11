var faker = require('faker');
var { database, user, password } = require('./config.js')
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database
});

//fill the prodcutTypes table
var productTypes = [];
for (var i = 0; i<200; i++) {
  productTypes.push(faker.commerce.product());
}
var qString = 'INSERT IGNORE INTO ProductTypes (Name) VALUES (?)'
for (var i = 0; i < productTypes.length; i++)
connection.query(qString, [productTypes[i]], (err, res) => {
  if (err) { return console.log(err)}
});

//fill the categories table
var categories = [];
for (var i = 0; i < 200; i++) {
  categories.push(faker.commerce.department());
}
qString = 'INSERT IGNORE INTO categories (Name) VALUES (?)'
for (var i = 0; i < categories.length; i++)
connection.query(qString, [categories[i]], (err, res) => {
  if (err) { return console.log(err)}
});

//fill the products table
var products = [];
for (var i = 0; i < 100; i++) {
  products.push([
    faker.commerce.productName(),
    faker.commerce.price(),
    faker.image.image(),
    Math.floor(Math.random() * 2),
    faker.commerce.department(),
    faker.commerce.product()
  ])
}
qString = 'INSERT IGNORE INTO products (description, price, imageUrl, featured, category_id, productType_id) VALUES (?, ?, ? ,? ,(SELECT id FROM categories WHERE categories.name = ?), (SELECT id FROM productTypes WHERE productTypes.name = ?))'
for (var i = 0; i < products.length; i++)
connection.query(qString, products[i], (err, res) => {
  if (err) { return console.log(err)}
});



// var randomDescription = faker.commerce.productName();
// var randomPrice = faker.commerce.price();
// var randomImageUrl = faker.image.image();
// var randomFeatured = Math.floor(Math.random() * 2);
// var randomProductType = faker.commerce.product();
// var randomCategory = faker.commerce.department();

// var test = () => {
//   console.log(`random product name: ${randomName}`);
//   console.log(`random price: ${randomPrice}`);
//   console.log(`random image url: ${randomImageUrl}`);
//   console.log(`random bool: ${randomBool}`);
// }

// test();
