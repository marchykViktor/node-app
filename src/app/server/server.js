const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const cors           = require('cors')
const app            = express();
const port           = 7878;

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database);
  app.listen(port, () => {
    console.log('server avtive');
  });
})