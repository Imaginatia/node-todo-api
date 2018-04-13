const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo(req.body);

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send(todos);
  }).catch((e) => res.send(e))

});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('No such ID');
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send('No such ID');
    } else {
      res.send({todo});
    }
  }).catch((e) => {
    console.log(e);
  });
})


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports.app = app;
