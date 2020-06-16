'use strict';

const timeStamp = function (req, res, next) {
  req.timeStamp = Date.now();
  next();
}

module.exports = timeStamp;

// module.exports = (req, res, next) => {
//   //put timestamp on req object in property called requestTime
//   const timeStamp = Date.now();
//   next();
// }