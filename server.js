var express = require("express");
var authenticate = require("./middleware/authenticate");
var app = express();

function basicLogger(req, res, next) {
  console.log(req.url);
  next();
}

app.get("/", basicLogger, function(req, res) {
  res.send("Hello world");
});

app.get("/users", basicLogger, authenticate, function(req, res) {
  res.send("Users route");
});

app.get("/someRoute", function(req, res) {
  res.send("Some route");
});

app.listen(1234, function() {
  console.log("Server connected");
});
