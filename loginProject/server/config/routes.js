var usersAPI = require('./../controller/userController.js');

module.exports = function(app){
	app.get('/userMgmt', function(request, response){
		usersAPI.displayAllUsers(request, response);
	})

	app.post('/addUser/submit', function(request, response){
		usersAPI.addUser(request, response);

	})

}
