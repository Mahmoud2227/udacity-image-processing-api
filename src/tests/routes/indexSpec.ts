import request from 'supertest';

import app from '../..';

describe('Get /api', () => {
    it("should return a message to the user if the image doesn't exists", () => {
        request(app).get('/api?fileName=image&width=100&height=200').expect('Image not found!');
    });
    it("should return a message to the user if the parameters that he entered aren't enough", () => {
        request(app).get('/api?fileName=image').expect('please make sure that you entered all the parameters');
    });
});
