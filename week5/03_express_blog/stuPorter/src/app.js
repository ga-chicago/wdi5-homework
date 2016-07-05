// Setting up the server

var express    = require('express'), 
	app		   = express(),
	exphbs     = require('express-handlebars'),
	bodyParser = require('body-parser')

//////////////////////////////////////////

app.engine('hbs', exphbs({
	defaultLayout: 'default',
	extname:       '.hbs',
	layoutsDir:    __dirname + '/views/layouts/',
	partialsDir:   __dirname + '/views/partials/'
}))


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');




//////////////////////////////////////////

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/home', function(req, res, next){
	res.render('home', {})
})


app.get('/login', function(req, res, next){
	res.render('login', {})
})

app.post('/login', function(reqquesterrrrrr, res, next){
	console.log('--------------------req.body')
	console.log(reqquesterrrrrr.body)
	console.log('---------------------req.params')
	console.log(reqquesterrrrrr.params)
	console.log('---------------------req.query')
	console.log(reqquesterrrrrr.query)
	console.log(reqquesterrrrrr)
	res.send("request recieved")
})

app.get('/about', function(req, res, next){
	res.render('about', {})
})

app.get('/profile', function(req, res, next){
	res.render('profile', {})
})

app.post('/profile', function(req, res, next) {
	res.send("You actually did.")
	console.log(req.body)
})

app.get('/welcome', function(req, res, next){
	res.render('welcome')
})

app.post('/welcome', function(req, res, next){
	res.send("suhhhh dude. Congrats on your birthday")
	console.log(req.body)
})


console.log('what is going on?')

var server = app.listen(3000, function() {
	console.log('Server started at http://localhost:3000');
});

/////////////////////////////////////////