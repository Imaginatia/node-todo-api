const {MongoClient} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    test: 'Walk the dog',
    completed: true
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
