import request from 'supertest';

import app from '..';

it('should return 200 OK', () => {
    request(app).get('/').expect(200);
});
