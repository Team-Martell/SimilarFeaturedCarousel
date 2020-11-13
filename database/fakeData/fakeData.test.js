const fake = require('./fakeDataHelpers.js');

// test('testing jest', () => {
//   expect(typeof fake.fillProducts).toBe('function');
//   expect(typeof fake.fillProductTypes).toBe('function');
//   expect(typeof fake.fillCategories).toBe('function');
// });

describe('Create Functions', () => {
  it('should create n items and return them in an array', () => {
    for(var i = 0; i < 100; i++) {
      var random = Math.floor(Math.random() * 100);
      expect(fake.createFakeProducts(random).length).toBe(random);
      expect(fake.createFakeProductTypes(random).length).toBe(random);
      expect(fake.createFakeCategories(random).length).toBe(random);
    }
  });
});