### Schema

CREATE DATABASE beer_db;
USE beer_db;

CREATE TABLE beers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	brewery varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	description varchar(500) NOT NULL,
	PRIMARY KEY (id)
);
