const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 5
};

var token = jwt.sign(data, 'secret');
console.log(token);
var decoded = jwt.verify(token, 'secret');
console.log(decoded);
