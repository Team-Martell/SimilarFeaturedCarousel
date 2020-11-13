const mysql = require('mysql');
const { database, user, password } = require('./fakeData/config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database
});

const getDataWithPType = (productid, cb) => {
  var qProductType = 'SELECT name FROM productTypes LEFT JOIN products ON productTypes.id = products.productType_id WHERE products.id = ?';

  connection.query(qProductType, [productid], (err, data) => {
    if (err) {return console.log(err);}
    var productType = (data[0].name);

    var qString = 'SELECT imageUrl, price, description, productTypes.name FROM products LEFT JOIN productTypes ON products.productType_id = productTypes.id WHERE productTypes.name = ?';
    connection.query(qString, [productType], (err, data) => {
        if (err) {return console.log(err);}
        cb(data);
      })
  })
}

const getDataWithCategory = (productid, cb) => {
  var qCategory = 'SELECT name FROM categories LEFT JOIN products ON categories.id = products.category_id WHERE products.id = ?';

  connection.query(qCategory, [productid], (err, data) => {
    if (err) {return console.log(err);}
    var productType = (data[0].name);

    var qString = 'SELECT imageUrl, price, description, categories.name, featured FROM products LEFT JOIN categories ON products.category_id = categories.id WHERE categories.name = ?';
    connection.query(qString, [productType], (err, data) => {
        if (err) {return console.log(err);}
        cb(data);
      })
  })
}

module.exports = {
  getDataWithPType,
  getDataWithCategory
}
