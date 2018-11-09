var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	url: {type: String, unique: true, sparse: true, trim: true},




	
	title: String,
	description: String,
	avatarUrl: {type: String, default: '/api/user/default.png'},
	moderators: [{type: mongoose.Schema.Types.ObjectId, sparse: true, ref: 'User'}],
});

Schema.methods.create = function(obj, user, sd) {
	this.author = user._id;
}

module.exports = mongoose.model('Pages', Schema);
