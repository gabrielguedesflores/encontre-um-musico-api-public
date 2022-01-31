const express = require("express");
const app = express();
const PATCH_ENV = '/home/gabrielflores/Documentos/code/encontre-musico/';
var path = require('path');
var users = 'Gabriel Guedes Flores';

app.get("/users", function(req, res){
  res.send(users);
});


//app.listen(process.env.PORT || 3000);
app.listen(8081);