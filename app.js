
var express = require('express');
var path = require('path');


var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware 


// define route

app.get('/', function(req, res){

	res.render('index', {
		title: 'my title', 
		items: [
			{id: 1, desc: 'foo'}, 
			{id: 2, desc: 'bar'},
		]


	});
});


app.post('/add', function(req, res){

res.send('added');


});

app.listen(1337, function(){

		console.log('ready on port 1337');


});
