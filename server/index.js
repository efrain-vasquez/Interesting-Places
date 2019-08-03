
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));



/*
these are the get, post, delete methods that our server uses to get post and delete the info 
requested and to clientside. It takes two parameters the end point which is our database,
and the function that actually performs the action. 
*/
app.get('/items', getInterestingPlaces);
app.post('/items', addInterestingPlace);
app.delete('/items', deleteInterestingPlace);

/*
these functions allow the server to make requests about information such as requesting 
all the info in the databse, adding info to the database, and deleteing information to the database. 
They take the functions that are in the database and use them to perform these actions.
*/
function getInterestingPlaces(request, response) {
  db.getInterestingPlaces(data => {
    response
      .status(200)
      .send(data)
      .end();
  });
};

function addInterestingPlace(request, response) {
  const { address, locationName, description } = request.body;
  db.postInterestingPlace(address, locationName, description, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
};

function deleteInterestingPlace(request, response) {
  const { id } = request.body;
  db.removeInterestingPlace(id, data => {
    response
    .status(200)
    .send(data)
    .end();
  });
};

/*
here the server is listening so as to be ready to perform the actions that it is listening for
*/
app.listen(port, () => {
  console.log('Server is up!');
});



module.exports = app;
