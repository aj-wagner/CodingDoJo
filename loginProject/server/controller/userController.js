var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	 return {
	 	displayAllUsers:function(request, response){
	 		User.find({}, function(err, user){
	 			response.render('userMgmt', {users: user})
	 		})
	 	},

	 	addUser:function(request, response){
	 		console.log(request.body);

	 		var user = new User(request.body);
	 		user.save();
	 		response.redirect('/userMgmt');
	 	},

	 	updateUser:function(request, response){

	 		// var user = new User(request.body);
	 		// user.save();
	 		// response.redirect('/');
	 	}
	 }
})();