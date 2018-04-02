const {MongoClient} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Users').deleteOne().then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Users').deleteMany({test: 'Whisper'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndDelete({test: 'Mike'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  //client.close();
});
