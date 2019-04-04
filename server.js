// call the packages we need
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const testModel = require('/app/models/testModel');
const database = require('/app/database');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT;

const router = express.Router();

//middleware to use for all requests
router.use((req, res, next) => {
  // go logging
  console.log('Something is happening.');
  // make sure we go to the next routes and don't here
  next(); 
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

// register our routes
//all routes will be prefixed with /api
app.use('/api', router);

//start the server
app.listen(port);
console.log(`Magic happens on port ${port}`);
