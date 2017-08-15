const noteRoutes = require('./article_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
};