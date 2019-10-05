DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR (50) NOT NULL,
  locationName VARCHAR (50) NOT NULL,
  description VARCHAR (200) NOT NULL
);
INSERT INTO items (address, locationName, description) VALUES ('Toledo 39', 'Holacode', 'The coolest place on earth!');
