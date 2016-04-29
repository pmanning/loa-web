var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"app/dist")));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.listen(server_port, server_ip_address, function(){
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
})
