//the mongoose.js file (server/config/)

var mongoose = require('mongose');
var fs = require('fs');
var path=require('path');
var models_path = path.join(__dirname + './../models');

mongoose.connect('mongodb://localhost/datdb');
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>=0){
		require(models_path+'/'+file)
	}
})


//the model.js file (server/models)
var mongoose = require('mongoose');
var Schema = mangoose.Schema;

var CatSchema = new Schema({
	name: String,
	age: Number,
	friends: []
	}, {timestamps:true})
	mongoose.model('Cat', CatSchema);

//var UserSchema