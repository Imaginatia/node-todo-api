const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongoDB://localhost:27017/TodoApp');

module.exports = {mongoose};
