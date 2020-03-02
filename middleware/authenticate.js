module.exports = function(req, res, next) {
  if (req.query.name === "woodpecker") return next();
  res.send("You are not allowed");
};
