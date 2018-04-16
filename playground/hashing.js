const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hash = '$2a$10$4JBRZkfVN49nMciyb0CJw.Oem1nnvxV6QieukhHWfmjZWyrqf1eOi';

bcrypt.compare(password, hash, (err, res) => {
  console.log(res);
});
// var data = {
//   id: 5
// };
//
// var token = jwt.sign(data, 'secret');
// console.log(token);
// var decoded = jwt.verify(token, 'secret');
// console.log(decoded);
