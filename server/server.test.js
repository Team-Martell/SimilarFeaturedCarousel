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
  expect(response.status).toBe(200);
  done();
}),
it('Test the endpoint similar', async done => {
  const res = await request.get('/api/1/similar');
  expect(response.status).toBe(200);
  done();
}),
it('Test the endpoint featured', async done => {
  const res = await request.get('/api/1/featured');
  expect(response.status).toBe(200);
  done();
})
