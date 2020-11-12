const fake = require('./fakeDataHelpers.js');

test('testing jest', () => {
  expect(typeof fake.fillProducts).toBe('function');
})