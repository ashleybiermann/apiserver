'use strict';

const error404 = require('../lib/middleware/404');

const req = { method: 'test', path: 'test' };
const res = {status: jest.fn().mockImplementation(() => {
  return {send: jest.fn()}
})};
const next = jest.fn();
const consoleSpy = jest.spyOn(console, 'log');


describe('Testing Middleware', () => {
  it('Should console log a 404 error', () => {
    error404(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('__ERROR!__: Cannot ' + req.method + ' ' + req.path);
    expect(next).not.toHaveBeenCalledWith();
  });
});
