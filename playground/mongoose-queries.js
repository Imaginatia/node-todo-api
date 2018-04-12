const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ac5843cd3aaba09c48b3b08';

// Todo.find({_id: id})
//   .then((todo) => console.log(todo));
//
// Todo.findOne({_id: id})
//   .then((todo) => console.log(todo));

Todo.findById(id)
  .then((todo) => console.log(todo))
  .catch((e) => console.log(e));
