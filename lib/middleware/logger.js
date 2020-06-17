'use strict';

// middlware needs at least 3 params
// our logger needs req.path, req.method, and req.timestamp, and next()
module.exports = (req, res, next) => {
  console.log('__REQUEST__: ' + `${req.timeStamp}` + ` ${req.path}` + ` ${req.method}`);
  next();
}
