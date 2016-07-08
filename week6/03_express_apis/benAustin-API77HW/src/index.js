var express = require('express');
var app     = express();
var exphbs  = require('express-handlebars');

// maybe not needed..?
app.engine('hbs', exphbs({
	layoutsDir:  __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
	extname:     '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

require('./models/db');

app.use('/apis/?', require('./controllers/apis'));

var server = app.listen(3000, function() {
	console.log('server running at http://localhost:3000')
});
