'use strict';

const supergoose = require('cf-supergoose');
const server = require('../lib/routes/v1.js');

const mockRequest = supergoose.server(server);
jest.spyOn(console, 'log').mockImplementation();

describe('Testing server', () => {
  it('Should be able to GET categories', () => {
    return mockRequest.get('/api/categories')
      .then(results => {
        expect(results.body.categories);
      });
  });
});
