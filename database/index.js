
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Books');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' were connected!');
});
module.exports = db;
