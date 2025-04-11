const request = require('supertest');
const app = require('./index'); // Asegúrate de que index.js exporte la app Express

let server;

beforeAll(() => {
  server = app.listen(3000); // Inicia el servidor
});

afterAll(() => {
  server.close(); // Cierra el servidor después de las pruebas
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
