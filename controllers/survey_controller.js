var express = require('express');
var router = express.Router();

var beer_names = require('../models')["beer_names"];
var User = require('../models/')["User"];

//get route -> index
router.get('/', function(req,res){
	res.redirect('/beer_names')
});

// get route to match sequelize
router.get('/beer_names', function(req,res){
	//sequelize function
	beer_names.findAll({
		where:{
			abv:{ $lte: 5.4 }
		}
	});
	
	.then(function(color){
		beer_names.findAll({
			where:{
				abv:{ $lte: 5.4 },
				color:{ $and:{
					a: abv
				}}
			}
		});
	});

	.then(function(key_notes){
		beer_names.findAll({
			where:{
				abv:{ $lte: 5.4 },
				key_notes:{ $and:{
					a: abv,
					a: color
				}}
			}
		});
	});

	.then(function(aroma){
		beer_names.findAll({
			where:{
				abv:{ $lte: 5.4 },
				aroma:{ $and:{
					a: abv,
					a: color,
					a: key_notes
				}}
			}
		});
	});

	.then(function(style){
		beer_names.findAll({
			where:{
				abv:{ $lte: 5.4 },
				style:{ $and:{
					a: abv,
					a: color,
					a: key_notes,
					a: aroma
				}}
			}
		});
	});

	.then(function())
});
