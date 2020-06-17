'use strict';

const timeStamp = function (req, res, next) {
  const d = new Date(Date.now());
  req.timeStamp = d;
  next();
}

module.exports = timeStamp;

// found conversion to readable date from Stack Overflow
// https://stackoverflow.com/questions/30158574/how-to-convert-result-from-date-now-to-yyyy-mm-dd-hhmmss-ffff/30158597