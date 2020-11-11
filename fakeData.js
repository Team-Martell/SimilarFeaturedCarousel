var faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();
var randomImageUrl = faker.image.image();

var test = () => {
  console.log(`random name: ${randomName}`);
  console.log(`random email: ${randomEmail}`);
  console.log(`random image url: ${randomImageUrl}`);
  console.log(`random card: ${randomCard}`);
}

test();