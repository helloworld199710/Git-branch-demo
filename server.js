var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(1234, function() {
  console.log("Server connected");
});