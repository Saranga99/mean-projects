var express = require("express");
var router = express.Router();

var Employee = require("../database/dataFile");

router.get("/", (req, res, next) => {
  Employee.find({}, (err, docs) => {
    res.send(docs);
  });
});

module.exports = router;
