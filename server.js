var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get("/users", function(req, res) {
  res.send("Users route");
});

app.listen(1234, function() {
  console.log("Server connected");
});
