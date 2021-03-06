var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); // for working with cookies
var bodyParser = require('body-parser');
var session = require('express-session'); 
var methodOverride = require('method-override'); // for deletes in express

var Sequelize = require('sequelize');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('beer_db', 'root', null);


var application_controller = require('./controllers/application_controller');
var home_controller = require('./controllers/home_controller');
var results_controller = require('./controllers/results_controller');
//var users_controller = require('./controllers/users_controller');


var app = express();

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', application_controller);
app.use('/results', results_controller);
app.use('/home', home_controller);
//app.use('/users', users_controller);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// app.get('/home', function(req,res) {

//     connection.query('SELECT * FROM beer_names; WHERE abv = ?' [req.body.abv], function(err, data) {

//       if (err) throw err;

//       if ([req.body.abv == "1"]){
//       	connection.query('SELECT color; FROM beer_names; WHERE abv<=5.4', function(err, data){  
//       		res.render('index', {beer_names: data});

//       })


//     }
// })
// })

// sequelize.query('SELECT color; FROM beer_names; WHERE abv = "5"',
//   {  type: sequelize.QueryTypes.SELECT }).then(function(beer_names) {
//   console.log(beer_names.color)
// });


var port = 3000;
app.listen(port);

module.exports = app;
