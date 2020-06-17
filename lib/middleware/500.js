'use strict';

module.exports = (req, res) => {
  console.log('__ERROR!__: ');
  res.status(500).send('Internal Server Error');
}