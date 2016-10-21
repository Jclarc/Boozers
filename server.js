
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

var beer_abvs = require("./models")["beer_abvs"];
beer_abvs.sync();

var beer_aromas = require("./models")["beer_aromas"];
beer_aromas.sync();

var beer_color = require("./models")["beer_color"];
beer_color.sync();

var beer_key_notes = require("./models")["beer_key_notes"];
beer_key_notes.sync();

var beer_names = require("./models")["beer_names"];
beer_names.sync();

var beer_styles = require("./models")["beer_styles"];
beer_styles.sync();



var port = 3000;
app.listen(port);
