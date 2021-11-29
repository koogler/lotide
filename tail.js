const assertEqual = require('./assertEqual');

const tail = function (elem) {
  let end = [];
  for (let i = 1; i < elem.length; i++) {
    end = end + elem[i];
    end = end + ' ';
  }
  return end;
};

module.exports = tail