module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index')
	})

	app.get('/testing', function(req, res){
		res.send('hello world');
	})

	app.get('/test/:name', function(req, res){
		res.json(req.params)
	})

	app.post('/results', function(req, res){
		res.send(req.body);
	})
}