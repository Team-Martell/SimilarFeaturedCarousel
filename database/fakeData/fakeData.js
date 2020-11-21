const fake = require('./fakeDataHelpers.js');

console.log('Seeding fake data...')

fake.fillProductTypes(200)
.then(() => {
  return fake.fillCategories(200);
})
.then(() => {
  return fake.fillProducts(100);
})

