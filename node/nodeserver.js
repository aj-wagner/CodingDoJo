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

app.use(bp.urlencoded({ extended: true }));
app.use(bp.jason());
app.use(express.static(path.join(__dirname + '/client')));

app.set('views', path.join(__dirname + '/client/templates'));
app.set('view engine', 'ejs')
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log('listening ');
})

create routes.js file within the / server / config.within the routes.js file include:
    module.export = function(app) {
        app.get('/', function(req, res) {

        })
    }