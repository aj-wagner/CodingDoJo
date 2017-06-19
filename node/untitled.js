
1.create project directory
//creates project folder

2. npm init -y
// creates the package.json file with defaul values

3. npm install express express-session body-parser path fs --y
// install packages plus adds them to the list of deps in the package.json file

4. create the dirctories with the project folder
	-client
		-template
		-css
		-js
	-server
		-config
		-controllers
		-models

5. create server.js file within the root project directory.  within the server.js file include:




var express = require('express');
//include the express libs to the express var
var app = express();
//invoke express lib assn. to app var
var bp = require('body-parser');
//include the body-parser libs
var path = require('path');
//include the path libs
var port = 8000;
//set var for port value

app.use(bp.urlencoded({extended:true}));
app.use(bp.jason());
app.use(express.static(path.join(__dirname + '/client')));

app.set('views', path.join(__dirname + '/client/templates'));

app.set('view engine', 'ejs')

require('./server/config/routes.js')(app);

//set the routes.js path
app.listen(port, function(){
	console.log('listening ');
})

6. create routes.js file within the /server/config.  within the routes.js file include:
module.exports = function(app){
	app.get('/', function(req, res){
		
	})
}


app.get('/cat/:num', function(req, res){
	//use req.params for data passed by URL
	var name=req.params.num

	var temp=null;
	for(var i=0; i<cat.length; i++){

	}

	res.json(temp);

	// use req.body for form data
	//num: req.body
})

//routes.jss
var api = require('./../controller/api.');

module.exports=function(app){
	app.get('/', function(req, res)){}

	app.get('/', api.)
}
		index:function(req, res){
			res.json{name}
		}
	}
}()

//controller.js file (within server/controller dir)
module.exports=(){(function())
	return{
		index:function(req, res){
			res.json{name}
		}
	}
}()

//normally we'd have 7 routes

index/show all
create
edit
destroy
update
show
new 




