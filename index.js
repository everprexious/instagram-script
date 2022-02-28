
var express = require('express')
var bodyParser = require('body-parser')

const Datastore = require('nedb')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Database = new Datastore('database.db');
Database.loadDatabase();
 
// POST /login gets urlencoded bodies
app.post('/public', urlencodedParser, function(req, res){
  const data = req.body;
  Database.insert(data);

});

// POST /api/users gets JSON bodies



 

app.use(express.static('public'))

app.listen(3000, () => console.log('listening at 3000'));

