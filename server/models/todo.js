const mongoose = require('mongoose');

var Todo = mongoose.model('Users', {
  test: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  completeAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
