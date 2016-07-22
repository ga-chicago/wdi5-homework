var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');
    exphbs     = require('express-handlebars')
    fs         = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:           '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

<<<<<<< HEAD
app.use('/route1/', require('./controllers/route1'))
=======

>>>>>>> 12bb0b19b54eccbdd8a83710ff9380dd92261ec8
app.use('/users/', require('./controllers/users'))

var data = {
  "message": "thanks.. you've sent me some useful data",
  "description": "your very first express API call"
};

app.route('/?')
  .get(function(req, res, next) {
    var cvd = fs.readFileSync(__dirname + '/db/controllerviewdata.json');

    res.render('login', {
      pageTitle: 'Login',
      cvd:    JSON.parse(cvd.toString())
    });
  })
  .post(function(req, res, next) {
    res.render("message: thanks.. you've sent me some useful data")
    console.log(req.body);
  })









app.listen(3000);
console.log("Your Express app is running...")

///method post, for form handlebars


