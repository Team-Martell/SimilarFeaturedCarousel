var express = require ('express');
var _ = require ('underscore')
const db = require ('../database/index.js');

var app = express();
app.use(express.static('public/dist'));
app.use(express.json());

app.get('/api/:productid/moreToConsider', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithPType(productid, (data) => {
    res.json(data);
  });
});

app.get('/api/:productid/similar', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithCategory(productid, (data) => {
    res.json(data);
  });
});

app.get('/api/:productid/featured', (req, res) => {
  var productid = parseInt(req.params.productid);
  db.getDataWithCategory(productid, (data) => {
    var filteredData = _.filter(data, (item) => {
      return item.featured;
    })
    res.json(filteredData);
  });
});

const PORT = 9999;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
})