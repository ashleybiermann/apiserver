'use strict';

const timeStamp = require('../lib/middleware/timestamp');
const logger = require('../lib/middleware/logger.js');

let req = { timeStamp: 'test', path: 'test',  method: 'test' };
let res = {};
let next = jest.fn();
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Middleware test', () => {
  it('should console log timeStamp, path, and method, then move on ', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('__REQUEST__: test test test');
    expect(next).toHaveBeenCalledWith();
  });
  it('should return that a timeStamp has been made, then move on ', () => {
    timeStamp(req, res, next);
    expect(req.timeStamp).toEqual(new Date(Date.now()));
    expect(next).toHaveBeenCalledWith();
  });
});
