DROP DATABASE IF EXISTS heroku_6147ae801fa364d;

CREATE DATABASE heroku_6147ae801fa364d;

USE heroku_6147ae801fa364d;

CREATE TABLE heroku_6147ae801fa364d (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  address varchar (50) NOT NULL,
  locationName varchar (50) NOT NULL,
  description varchar (200) NOT NULL
);
INSERT INTO heroku_6147ae801fa364d (address, locationName, description) VALUES ('Toledo 39', 'Holacode', 'The coolest place on earth!

