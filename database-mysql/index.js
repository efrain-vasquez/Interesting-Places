const mysql = require('mysql');
const dotenv = require('dotenv')
import 


// process.env.DB_PASSWORD


const connection = mysql.createConnection({
  host     : Host,
  user     : Username,
  password : Password,
  database : Database
});



// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })




// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Holacode',
//   database : 'test'
// });


connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});


/*
In this file we also have two query functions that allow the database to retrive and input information
into the database. These methods/functions will later be used by the server within the server file to
perform these same actions. We must remember computers have powerful computing capability but they need to be
programed to be able to perform those actions.
*/



exports.getInterestingPlaces = cb => {
  connection.query('SELECT * from items', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  });
};

exports.postInterestingPlace = (address, locationName, description, cb) => {
  connection.query(
    'INSERT INTO items (address, locationName, description) VALUES (?, ?, ?);',
    [address, locationName, description],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};


exports.removeInterestingPlace = (id, cb) => {
  connection.query('DELETE from items WHERE id=?', [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  });
};