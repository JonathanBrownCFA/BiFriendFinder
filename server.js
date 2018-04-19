var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;
  
//json parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
 
//api
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//confirmation app is listening on assigned port
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
