var express = require ('express');
var _ = require ('underscore')
const db = require ('../database/index.js');

var app = express();
app.use(express.static('public/dist'));
app.use(express.json());

app.get('/api/carousel/:productid/moreToConsider', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithPType(productid, (data) => {
    res.json(data);
  });
});

app.get('/api/carousel/:productid/similar', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithCategory(productid, (data) => {
    res.json(data);
  });
});

app.get('/api/carousel/:productid/featured', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithCategory(productid, (data) => {
    var filteredData = _.filter(data, (item) => {
      return item.featured;
    })
    res.json(filteredData);
  });
});

module.exports = app;