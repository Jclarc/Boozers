var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);


// var Beer = require("./models")["beer_names"];
// beer_names.sync();


app.get('/', function(req,res) {


    connection.query('SELECT * FROM beer_names; WHERE abv = ?' [req.body.abv], function(err, data) {

      if (err) throw err;

      if ([req.body.abv == "1"]){
      	connection.query('SELECT color; FROM beer_names; WHERE abv<=5.4', function(err, data){  
      		res.render('index', {beer_names: data});

      }

      res.render('index', {beer: data});

    });
});

var port = 3000;
app.listen(port);
