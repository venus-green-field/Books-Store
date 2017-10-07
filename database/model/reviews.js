//This Model stores the coments (reviews )data
var mongoose = require('mongoose');
var reviwSchema = mongoose.Schema({
	bookid:  String,
	text: String,
	rating: Number,
	userid:String
})
var reviews = mongoose.model('reviews', reviwSchema);
module.exports = reviews;
