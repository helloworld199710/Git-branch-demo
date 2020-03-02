var express = require("express");
var authenticate = require("./middleware/authenticate");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get("/users", authenticate, function(req, res) {
  res.send("Users route");
});

app.listen(1234, function() {
  console.log("Server connected");
});
