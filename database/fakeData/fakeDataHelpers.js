var faker = require('faker');
var { database, user, password } = require('../config/config.js')
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database
});


const createFakeProductTypes = (n) => {
  var productTypes = [];
  for (var i = 0; i<n; i++) {
    productTypes.push(faker.commerce.product());
  }
  return productTypes;
};

const fillProductTypes = async (n) => {
  var productTypes = createFakeProductTypes(n);

  var qString = 'INSERT IGNORE INTO productTypes (Name) VALUES (?)'
  for (var i = 0; i < productTypes.length; i++) {
    await connection.query(qString, [productTypes[i]], (err, res) => {
      if (err) { return console.log(err)};

    });
    console.log(`filling ProductTypes ${i+1} of ${n}`)
  }
  // console.log('all stored');
}

//fill the categories table
const createFakeCategories = (n) => {
  var categories = [];
  for (var i = 0; i < n; i++) {
    categories.push(faker.commerce.department());
  }
  return categories;
}

const fillCategories = async (n) => {
  var categories = createFakeCategories(n);
  var qString = 'INSERT IGNORE INTO categories (Name) VALUES (?)'
  for (var i = 0; i < categories.length; i++) {
      await connection.query(qString, [categories[i]], (err, res) => {
      if (err) { return console.log(err)}
    });
    console.log(`filling Categories ${i+1} of ${n}`)
  }
}

const createFakeProducts = (n) => {
  var products = [];
  for (var i = 0; i < n; i++) {
    products.push([
      faker.commerce.productName(),
      faker.commerce.price(),
      faker.image.image(),
      Math.floor(Math.random() * 2),
      faker.commerce.department(),
      faker.commerce.product()
    ])
  }
  return products;
}
const fillProducts = async (n) => {
  var products = createFakeProducts(n)
  var qString = 'INSERT IGNORE INTO products (description, price, imageUrl, featured, category_id, productType_id) VALUES (?, ?, ? ,? ,(SELECT id FROM categories WHERE categories.name = ?), (SELECT id FROM productTypes WHERE productTypes.name = ?))'
  for (var i = 0; i < products.length; i++) {
      await connection.query(qString, products[i], (err, res) => {
      if (err) { return console.log(err)}
    });
    console.log(`filling Products ${i+1} of ${n}`)
  }
  connection.end();
}


module.exports = {
  createFakeCategories,
  createFakeProductTypes,
  createFakeProducts,
  fillProductTypes,
  fillProducts,
  fillCategories
}
