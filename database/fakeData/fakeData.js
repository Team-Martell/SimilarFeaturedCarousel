const fake = require('./fakeDataHelpers.js');

fake.fillProductTypes(200)
.then(() => {
  return fake.fillCategories(200);
})
.then(() => {
  return fake.fillProducts(100);
})

