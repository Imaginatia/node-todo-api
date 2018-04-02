const {MongoClient} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').find({test: 'Whisper'}).count().then((count) => {
    console.log('Whisper count:');
    console.log(count);
  }, (err) => {
    console.log(err);
  });

  client.close();
});
