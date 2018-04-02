const {MongoClient} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'Walk the dog',
  //   completed: true
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todo documents:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });
  db.collection('Users').find({test: 'Whisper'}).count().then((count) => {
    console.log('Whisper count:');
    console.log(count);
  }, (err) => {
    console.log(err);
  });

  client.close();
});
