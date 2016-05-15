var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./server/controllers/schoolController");

var app = express();
app.use(express.static(path.join(__dirname,"app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.listen(server_port, server_ip_address, function(){
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
})

// Connect to mongodb database

var db_url = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost/"

mongoose.connect(db_url + "web");
