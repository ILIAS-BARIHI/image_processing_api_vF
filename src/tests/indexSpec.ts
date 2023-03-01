import supertest from 'supertest';
import app from '../index';
const request = supertest(app);
describe('test image processor', () => {
  it(' front-end_page', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('checks_missing_parameters', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(400);
  });
  it('checks_for_invalid_image_dimension ', async () => {
    const response = await request.get('/image?f=encenadaport&x=jpeg&w=w&h=h');
    expect(response.status).toBe(400);
  });
  it('checks for unknown image asset', async () => {
    const response = await request.get('/image?f=unknown&x=PNG&w=100&h=100');
    expect(response.status).toBe(404);
  });
  it('gets resized image', async () => {
    const response = await request.get(
      '/image?f=encenadaport&x=jpeg&w=100&h=100'
    );
    expect(response.status).toBe(200);
  });
  it('gets resized image with specified image format', async () => {
    const response = await request.get('/image?f=fjord&x=JPEG&w=1000&h=1000');
    expect(response.status).toBe(200);
  });
});
