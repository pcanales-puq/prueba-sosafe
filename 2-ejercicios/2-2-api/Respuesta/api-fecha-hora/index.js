var express = require('express');
var router = require('./routes/fecha-hora');
var config  = require('./config/appConfig');
var app = express();

app.use(router);
app.listen(config.connection.port, function() {
  console.log("corriendo en puerto [" + config.connection.port + "] metodo del test  GET - path : /fecha-hora ");
});