var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

  const conf = require('../config/db');

  app.get('/api/articles', (req, res) => {
    db.collection(conf.collectionList).find().toArray((err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

  app.get('/api/articles/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection(conf.collectionList).findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

  app.post('/api/articles', (req, res) => {
    const article = { title: req.body.title, cdate: new Date(), body: req.body.body };
    db.collection(conf.collectionList).insert(article, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put ('/api/articles/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const article = { title: req.body.title, cdate: new Date(), body: req.body.body };
    db.collection(conf.collectionList).update(details, article, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(article);
      } 
    });
  });

};