var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title:  String ,
  auther: String,
  descreption: String,
  image:String,
  pdf:String,
  gener:String,
  rating:Number,
  publishDate:String,
  reviews:String,
  pages:Number,
  publisher:String
});
var Book = mongoose.model('Book', bookSchema);
module.exports = Book;