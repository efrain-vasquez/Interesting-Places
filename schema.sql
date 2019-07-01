DROP DATABASE IF EXISTS heroku_7ff9bd391daf70e;

CREATE DATABASE heroku_7ff9bd391daf70e;

USE heroku_7ff9bd391daf70e;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  address varchar (50) NOT NULL,
  locationName varchar (50) NOT NULL,
  description varchar (200) NOT NULL
);
INSERT INTO items (address, locationName, description) VALUES ('Toledo 39', 'Holacode', 'The coolest place on earth!)

