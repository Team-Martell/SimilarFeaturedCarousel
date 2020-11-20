require('babel-polyfill');
const app = require ('./index.js')
const supertest= require('supertest');
const http = require('http');

let server;
let request;

beforeAll(async () => {
  server = http.createServer(app);
  await server.listen();
  request = supertest(server);
});

afterAll(() => {
  server.close();
})

it('Test the endpoint moreToConsider', async done => {
  const res = await request.get('/api/1/moreToConsider');
  done();
}),
it('Test the endpoint similar', async done => {
  const res = await request.get('/api/1/similar');
  done();
}),
it('Test the endpoint featured', async done => {
  const res = await request.get('/api/1/featured');
  done();
})